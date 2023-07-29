import PropTypes from "prop-types";

function Card({ children, reverse }) {
  return <div className={`card ${reverse && "recerse"}`}>{children}</div>;
}

export default Card;

Card.defaultProps = {
  reverse: false,
};

Card.propType = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
