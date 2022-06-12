import PropTypes from 'prop-types';
import '../../styles/FeedbackList.css';
import FeedbackItem from "../FeedbackItem";

function FeedbackList({feedbacks, handleDelete}) {
  if (!feedbacks || feedbacks.length === 0) {
    return (
      <div className="feedback-list">
        <p>No feedbacks yet.</p>
      </div>
    )
  }

  return (
    <div className="feedback-list">
      {feedbacks.map(feedback => (
        <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired
}

export default FeedbackList;
