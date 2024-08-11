import React from 'react';

const Result = ({ answers, questions }) => {
  const score = answers.reduce((acc, answer, index) =>
    answer === questions[index].answer ? acc + 1 : acc
  , 0);

  let messageClass = '';
  if (score === questions.length) {
    messageClass = 'perfect-score';
  } else if (score > questions.length / 2) {
    messageClass = 'good-job';
  } else {
    messageClass = 'better-luck';
  }

  return (
    <div className="result-container">
      <h2>Your Score: {score} / {questions.length}</h2>
      <p className={messageClass}>
        {score === questions.length ? "Perfect score!" : 
         score > questions.length / 2 ? "Good job!" : 
         "Better luck next time."}
      </p>
    </div>
  );
};

export default Result;
