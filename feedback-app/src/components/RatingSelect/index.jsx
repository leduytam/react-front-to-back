import { useContext, useEffect, useState } from 'react';
import { FeedbackContext } from '../../contexts';
import '../../styles/RatingSelect.css';

function RatingSelect({ select }) {
  const [rating, setRating] = useState(10);

  const { currentEditingFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (currentEditingFeedback !== null) {
      setRating(currentEditingFeedback.rating);
    }
  }, [currentEditingFeedback]);

  function handleRatingChange(e) {
    setRating(+e.target.value);
    select(+e.target.value);
  }

  return (
    <ul className='rating-select'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            name='rating'
            id={`rating-${i + 1}`}
            value={i + 1}
            onChange={handleRatingChange}
            checked={rating === i + 1}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
