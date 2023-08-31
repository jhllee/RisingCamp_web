import { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import roomData from "../data/roomData.json";
import "./Detail.css";

function DetailPage() {
  const params = useParams();
  const selectedRoom = roomData.find(
    (room) => room.roomId === parseInt(params.roomId, 10)
  );

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const initMap = useCallback(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: selectedRoom.lat, lng: selectedRoom.lng },
      zoom: 16,
    });

    markerRef.current = new window.google.maps.Marker({
      position: { lat: selectedRoom.lat, lng: selectedRoom.lng },
      map,
      title: "Selected Room Location",
    });
  }, [selectedRoom.lat, selectedRoom.lng]);

  useEffect(() => {
    initMap();

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, [initMap]);

  return (
    <div className="detail">
      <h2>{selectedRoom.description}</h2>
      <div className="leftandright">
        <div className="left">
          <span>{`후기 ${selectedRoom.review}개`}</span>
          <span>{selectedRoom.name}</span>
        </div>
        <div className="right">
          <span>공유하기</span>
          <span>저장</span>
        </div>
      </div>
      <div className="room-detail">
        <div className="r1">
          <img
            className="r1img"
            src={`${process.env.PUBLIC_URL}/${selectedRoom.src}`}
            alt={selectedRoom.name}
          />
        </div>

        <div className="r2">
          <div className="r2-1">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedRoom.src1}`}
              alt={selectedRoom.name}
            />
          </div>
          <div className="r2-2">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedRoom.src2}`}
              alt={selectedRoom.name}
            />
          </div>
        </div>
        <div className="r3">
          <div className="r3-1">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedRoom.src3}`}
              alt={selectedRoom.name}
            />
          </div>
          <div className="r3-2">
            <img
              src={`${process.env.PUBLIC_URL}/${selectedRoom.src4}`}
              alt={selectedRoom.name}
            />
          </div>
        </div>
      </div>
      <h2>{selectedRoom.host} 님이 호스팅하는 텐트</h2>
      <p>{`최대 인원 ${selectedRoom.max}명, 침실 ${selectedRoom.bedroom}개, 침대 ${selectedRoom.bed}개, ${selectedRoom.bathroom}`}</p>
      <hr />
      <h2>호스팅 지역</h2>
      <p>{selectedRoom.name}</p>
      <div
        className="map"
        style={{ width: "100%", height: "470px" }}
        ref={mapRef}
       />
      <span>더 보기</span>
    </div>
  );
}

export default DetailPage;
