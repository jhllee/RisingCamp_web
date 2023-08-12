import "./Home.css";
import gwangjin from "./assets/images/gwangjin.webp";

function Home() {
  const places = [];
  const placeList = places.map(() => <div>{}</div>)
  return (
    <div className="home">
      <img className="gwangjin-gu" src={gwangjin} alt="gwangjin"></img>
      <img className="gwangjin-gu" src={gwangjin} alt="gwangjin"></img>
      <img className="gwangjin-gu" src={gwangjin} alt="gwangjin"></img>
      <img className="gwangjin-gu" src={gwangjin} alt="gwangjin"></img>
    </div>
  );
}

export default Home;
