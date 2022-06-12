import { useState } from 'react';
import { FeedbackList, FeedbackStats, Header } from './components';
import FeedbackData from './FeedbackData';
import './styles/App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm('Are you are you want to delete?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  }

  return (
    <>
      <Header text='Feedback UI' />
      <FeedbackStats feedbacks={feedbacks} />
      <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
    </>
  );
}

export default App;
