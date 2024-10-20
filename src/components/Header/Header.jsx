import PropTypes from "prop-types";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header__title">{props.title}</h1>
      <img
        className="title__icon"
        src="https://res.cloudinary.com/dnvpep1sn/image/upload/v1728689821/kzmkitgyyipk4npdptzs.png"
        alt="tomato"
      />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
