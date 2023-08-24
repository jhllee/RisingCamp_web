import "./Nav.css";
import navData from "../../data/navData.json";

function Nav(props) {
  const filterChangeHandler = (event) => {
    const category = event.currentTarget.getAttribute("category");

    if (category) {
      props.onChangeFilter(category);
    }
  };

  return (
    <div className="carousel">
      <div className="carousel__left-button"></div>
      <div className="carousel__list">
        {navData.map((image) => (
          <div
            className="carousel__list-items"
            onClick={filterChangeHandler}
            category={image.category}
          >
            <img
              className="carousel__list-item"
              src={image.src}
              alt={image.description}
            />
            <p className="img-description">{image.description}</p>
          </div>
        ))}
        <button className="filter-button">
          <img
            className="filter-logo"
            src={process.env.PUBLIC_URL + "/images/logos/filter.png"}
            alt="filter"
          />
          <p>필터</p>
        </button>
      </div>
      <div className="carousel__right-button"></div>
    </div>
  );
}

export default Nav;
