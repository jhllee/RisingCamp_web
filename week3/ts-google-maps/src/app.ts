import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;
// 느낌표는 null이 되지 않을 것이란 뜻임

const GOOGLE_API_KEY = "{MY_API_KEY}";

declare var google: any;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: Number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault(); // 양식 제출을 방지한다(요청이 전송되지 않는다)
  const enteredAddress = addressInput.value;

  // send this to Google's API
  axios
    .get<GoogleGeocodingResponse>( // get method: get request를 url에 전송하는 기능
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;

      const map = new google.maps.Map(document.getElementById("map"), {
        center: coordinates,
        zoom: 16,
      });

      new google.maps.Marker({position: coordinates, map: map});
    })
    .catch((err) => {
      alert(err.messages);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);

// npm install --save @types/google.maps 요거 해도 타입지원인가? 오류 잡아주는거 안되넹.