import { useState } from 'react';
import {
  FeedbackForm,
  FeedbackList,
  FeedbackStats,
  Header
} from './components';
import FeedbackData from './FeedbackData';
import './styles/App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  }

  function addFeedback(feedback) {
    feedback.id = feedbacks.length + 1;

    setFeedbacks([...feedbacks, feedback]);
  }

  return (
    <>
      <Header text='Feedback UI' />
      <div className='feedback-container'>
        <FeedbackForm handleAddFeedback={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
