// Define a functional component named "Result".
// This component receives two props:
// - "answers": an array containing the user's answers.
// - "questions": an array containing the quiz questions, including the correct answers.
const Result = ({ answers, questions }) => {
  // Calculate the user's score by comparing their answers to the correct answers.
  // Use the "reduce" function to iterate through the "answers" array and accumulate the score.
  const score = answers.reduce((acc, answer, index) =>
    // If the answer matches the correct answer for the corresponding question, increment the score.
    answer === questions[index].answer ? acc + 1 : acc
  , 0);

  // Initialize a variable to hold the CSS class name for the result message.
  let messageClass = '';

  // Determine the appropriate message class based on the user's score.
  if (score === questions.length) {
    // Assign "perfect-score" class if the user got all answers correct.
    messageClass = 'perfect-score';
  } else if (score > questions.length / 2) {
    // Assign "good-job" class if the user scored more than half.
    messageClass = 'good-job';
  } else {
    // Assign "better-luck" class for lower scores.
    messageClass = 'better-luck';
  }

  // Render the result, including the score and a message with a dynamic class.
  return (
    <div className="result-container">
      {/* Display the user's score out of the total number of questions */}
      <h2>Your Score: {score} / {questions.length}</h2>

      {/* Display a feedback message with the corresponding CSS class */}
      <p className={messageClass}>
        {score === questions.length ? "Perfect score!" : 
         score > questions.length / 2 ? "Good job!" : 
         "Better luck next time."}
      </p>
    </div>
  );
};

// Export the "Result" component to make it available for use in other parts of the application.
export default Result;
