// Define a functional component named "Question".
// This component receives two props: 
// - "question": an object containing the question text and its options.
// - "onAnswer": a function to handle what happens when an option is selected.

const Question = ({ question, onAnswer, image }) => {
  return (
    <div className="question-container">
      {/* Display the question text inside an <h2> element */}
      {/* <img src={image} alt="" /> */}
      <h2>{question.question}</h2>
      <div className="options">
        {/* Iterate through the options array from the question object. */}
        {question.options.map((option, index) => (
          <button
            // Use "index" as the key for each option. This uniquely identifies each button in the list.
            key={index}
            // Attach an onClick handler to call the "onAnswer" function with the selected option as an argument.
            onClick={() => onAnswer(option)}
          >
            {/* Display the option text inside the button */}
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// Export the "Question" component to make it available for use in other parts of the application.
export default Question;
