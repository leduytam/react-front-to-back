import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      rating: 5,
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti autem delectus magni eaque ipsam maxime nam voluptatum earum repellat atque a repellendus totam eveniet, voluptas dolores unde quasi iure?'
    },
    {
      id: 2,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus debitis qui odit ex, omnis perferendis autem, molestiae non unde illum sequi laborum totam dolore. Maiores odio culpa necessitatibus consequatur temporibus.'
    },
    {
      id: 3,
      rating: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti autem delectus magni eaque ipsam maxime nam voluptatum earum repellat atque a repellendus totam eveniet, voluptas dolores unde quasi iure?'
    }
  ]);

  const [currentEditingFeedback, setCurrentEditingFeedback] = useState(null);

  function deleteFeedback(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  }

  function addFeedback(feedback) {
    feedback.id = feedbacks.length + 1;
    setFeedbacks([...feedbacks, feedback]);
  }

  function editFeedback(feedback) {
    setCurrentEditingFeedback(feedback);
  }

  function updateFeedback(id, feedback) {
    setFeedbacks(
      feedbacks.map((f) => (f.id === id ? { ...f, ...feedback } : f))
    );
    setCurrentEditingFeedback(null);
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        currentEditingFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
