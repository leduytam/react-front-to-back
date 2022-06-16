import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentEditingFeedback, setCurrentEditingFeedback] = useState(null);
  const [isFetchingFeedbacks, setIsFetchingFeedbacks] = useState(true);

  useEffect(() => {
    if (isFetchingFeedbacks) {
      fetchFeedbacks();
    }
  }, [isFetchingFeedbacks]);

  async function fetchFeedbacks() {
    const response = await fetch('/feedbacks?_sort=id&_order=desc');

    if (!response.ok) {
      throw new Error('Failed to fetch feedbacks');
    }

    const feedbacks = await response.json();
    setFeedbacks(feedbacks);
    setIsFetchingFeedbacks(false);
  }

  async function deleteFeedback(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      const response = await fetch(`/feedbacks/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete feedback');
      }

      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  }

  async function addFeedback(feedback) {
    const response = await fetch('/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedback)
    });

    if (!response.ok) {
      throw new Error('Failed to add feedback');
    }

    const data = await response.json();
    setFeedbacks([...feedbacks, data]);
  }

  function editFeedback(feedback) {
    setCurrentEditingFeedback(feedback);
  }

  async function updateFeedback(id, feedback) {
    const response = await fetch(`/feedbacks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedback)
    });

    if (!response.ok) {
      throw new Error('Failed to update feedback');
    }

    const data = await response.json();

    setFeedbacks(feedbacks.map((f) => (f.id === id ? { ...f, ...data } : f)));
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
        currentEditingFeedback,
        isFetchingFeedbacks
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
