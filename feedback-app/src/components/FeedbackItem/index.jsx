import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { FeedbackContext } from '../../contexts';
import '../../styles/FeedbackItem.css';
import Card from '../Card';

function FeedbackItem({ feedback }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card className='feedback-item'>
      <div className='feedback-item__rating'>{feedback.rating}</div>
      <div className='feedback-item__text'>{feedback.text}</div>

      <div className='feedback-item__btn-group'>
        <button
          type='button'
          value=''
          className='feedback-item__btn feedback-item__btn-edit'
          onClick={() => editFeedback(feedback)}
        >
          <FaEdit />
        </button>
        <button
          type='button'
          value=''
          className='feedback-item__btn feedback-item__btn-delete'
          onClick={() => deleteFeedback(feedback.id)}
        >
          <FaTimes />
        </button>
      </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default FeedbackItem;
