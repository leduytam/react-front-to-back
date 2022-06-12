import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import '../../styles/FeedbackItem.css';

function FeedbackItem({feedback, handleDelete}) {
  return (
    <div className="feedback-item">
      <div className="feedback-item__rating">{feedback.rating}</div>
      <div className="feedback-item__text">{feedback.text}</div>
      <button className="feedback-item__btn-delete" onClick={() => handleDelete(feedback.id)}>
        <FaTimes color='purple'/>
      </button>
    </div>
  )
}

FeedbackItem.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default FeedbackItem
