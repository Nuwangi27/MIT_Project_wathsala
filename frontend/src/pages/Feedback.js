import React, { useState, useEffect } from 'react';
import Navibar from '../components/Navibar';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/save_feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }),
      });

      if (response.ok) {
        console.log('Feedback submitted successfully');
        // After submitting feedback, refresh the feedbacks list
        fetchFeedbacks();
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }

    // Reset the feedback form
    setFeedback('');
  };

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('http://localhost:5000/get_feedbacks');
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data.feedbacks);
      } else {
        console.error('Failed to fetch feedbacks');
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  useEffect(() => {
    // Fetch feedbacks when the component mounts
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <Navibar />
      <div className='container2' style={{ width: 500, marginTop:'10px' }}>
        <h1>Feedback Page</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Type your feedback here..."
          />
        </div>
        <button onClick={handleSubmit}>Submit Feedback</button>

        <div>
          <h2>Feedbacks:</h2>
          <ul>
            {feedbacks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
