import React from 'react';

function Feedback({ feedback }) {
  if (!feedback) return null; // Avoid rendering the component if there's no feedback

  return (
    <div className={`feedback 
    ${feedback === 'Correct!' ? 'correct' : 
    'incorrect'}`}>
      {feedback}
    </div>
  );
};

export default Feedback;
