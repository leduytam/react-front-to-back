import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { FeedbackContext } from '../../contexts';
import '../../styles/FeedbackList.css';
import FeedbackItem from '../FeedbackItem';
import Spinner from '../Spinner';

function FeedbackList() {
  const { feedbacks, deleteFeedback, isFetchingFeedbacks } =
    useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return (
      <div className='feedback-list'>
        <p>No feedbacks yet.</p>
      </div>
    );
  }

  return isFetchingFeedbacks ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={feedback.id}
              feedback={feedback}
              handleDelete={deleteFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
