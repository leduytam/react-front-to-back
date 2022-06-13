import { useState } from 'react';
import '../../styles/FeedbackForm.css';
import Card from '../Card';
import RatingSelect from '../RatingSelect';

function FeedbackForm({ handleAddFeedback }) {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(10);
  const [isBtnSendDisabled, setBtnSendDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  function validateReviewText(reviewText) {
    if (reviewText === '') {
      setErrorMessage('');
      setBtnSendDisabled(true);
      return;
    }

    if (reviewText.trim().length < 10) {
      setErrorMessage('Review text must be at least 10 characters long');
      setBtnSendDisabled(true);
      return;
    }

    setErrorMessage('');
    setBtnSendDisabled(false);
  }

  function handleReviewChange(e) {
    setReviewText(e.target.value);
    validateReviewText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isBtnSendDisabled) {
      return;
    }

    const feedback = {
      text: reviewText,
      rating: rating
    };

    handleAddFeedback(feedback);

    setReviewText('');
    setBtnSendDisabled(true);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className='feedback-form'>
        <h2 className='feedback-form__title'>
          How would you rate your service with us?
        </h2>

        <RatingSelect select={setRating} />

        <div className='feedback-form__input-group'>
          <input
            type='text'
            onChange={handleReviewChange}
            placeholder='Write a review'
            value={reviewText}
          />
          <button type='submit' disabled={isBtnSendDisabled}>
            Send
          </button>
        </div>

        {errorMessage && <p className='feedback-form__error'>{errorMessage}</p>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
