import PropTypes from 'prop-types';
import '../../styles/FeedbackStats.css';

function FeedbackStats({feedbacks}) {
  let averageRating = feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / feedbacks.length;

  averageRating = averageRating.toFixed(2).replace(/\.0+$/, '');
  
  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
    })).isRequired
}

export default FeedbackStats;
