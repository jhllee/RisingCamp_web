import "./Nav.css";
import images from "../../data/data.json";

function Nav() {
  return (
    <div className="carousel">
      <div className="carousel__left-button"></div>
      <div className="carousel__list">
        {images.map((image, index) => (
          <div key={index} className="carousel__list-items">
            <img className="carousel__list-item" src={image.src} alt={image.description} />
            <p className="img-description">{image.description}</p>
            </div>
        ))}
      </div>
      <div className="carousel__right-button"></div>
    </div>
  );
}

export default Nav;
