import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AboutIconLink,
  FeedbackForm,
  FeedbackList,
  FeedbackStats,
  Header
} from './components';
import FeedbackData from './FeedbackData';
import { AboutPage } from './pages';
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
    <BrowserRouter>
      <Header text='Feedback UI' />

      <div className='feedback-container'>
        <Routes>
          <Route
            index
            element={
              <>
                <FeedbackForm handleAddFeedback={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  feedbacks={feedbacks}
                  handleDelete={deleteFeedback}
                />
                <AboutIconLink />
              </>
            }
          />

          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
