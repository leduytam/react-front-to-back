import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import '../../styles/FeedbackItem.css';
import Card from '../Card';

function FeedbackItem({ feedback, handleDelete }) {
  return (
    <Card className='feedback-item'>
      <div className='feedback-item__rating'>{feedback.rating}</div>
      <div className='feedback-item__text'>{feedback.text}</div>
      <button
        type='button'
        value=''
        className='feedback-item__btn-delete'
        onClick={() => handleDelete(feedback.id)}
      >
        <FaTimes color='purple' />
      </button>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }),
  handleDelete: PropTypes.func
};

export default FeedbackItem;
