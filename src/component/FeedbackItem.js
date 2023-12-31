import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes onClick={() => deleteFeedback(item.id)} color="purple" />
      </button>
      <button className="edit">
        <FaEdit onClick={() =>editFeedback(item)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propType = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
