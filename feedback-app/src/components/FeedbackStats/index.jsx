import { useContext } from 'react';
import { FeedbackContext } from '../../contexts';
import '../../styles/FeedbackStats.css';

function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  let averageRating =
    feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / feedbacks.length;

  averageRating = averageRating.toFixed(2).replace(/\.0+$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

export default FeedbackStats;
