import React, { useState } from 'react';
import Question from '../components/Question'; // Component to display individual questions
import Result from '../components/Result'; // Component to display the final results
import chassidusQuestions from '../data/chassidusQuestions'; // Data file with Chassidus questions
import jsQuestions from '../data/jsQuestions'; // Data file with JavaScript questions
import './QuizPage.css'; // Importing CSS for styling
import Feedback from '../components/Feedback';
import QuestionTotal from '../components/QuestionTotal';
// import myImage from '../image 9.png'
// import rebbe from '../rebbe-groundbreaking.jpg'
// import myImage2 from '../image 9.png'
// import rebbe2 from '../rebbe-groundbreaking.jpg'

// const images = [myImage, rebbe, myImage2, rebbe2]
// explain props
function QuizPage() {
      // State to track the current question index
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      // State to store user's answers
      const [userAnswers, setUserAnswers] = useState([]);
      // State to determine whether to show the results
      const [showResults, setShowResults] = useState(false);
      // State to give feedback after an answer (e.g., "Correct!" or "Incorrect.")
      const [feedback, setFeedback] = useState('');
      const questionsToUse = chassidusQuestions;
      // Function to handle user selecting an answer
      function handleAnswer(answer) {
        // Get the correct answer for the current question
        const correctAnswer = 
        questionsToUse[currentQuestionIndex].answer;
        // Check if the user's answer matches the correct answer
        const isCorrect = correctAnswer === answer;
        // Update feedback state based on correctness
        setFeedback(isCorrect ? 'Correct!' : 'Incorrect.');
        // Delay for 1 seconds before showing the next question or results
        setTimeout(() => {
          setFeedback(''); // Clear feedback
          setUserAnswers([...userAnswers, answer]); // Add the user's answer to the answers array
          if (currentQuestionIndex < questionsToUse.length - 1) {
            // Move to the next question if there are more questions
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else {
            // Show results if this was the last question
            setShowResults(true);
          }
        }, 1000);
      }

    return (
        <div className="quiz-app">
          {/* Show results screen if all questions are answered */}
          {/* Here we have the result component and we're giving it access to 2 props */}
          {showResults ? (
            <Result 
                answers={userAnswers} 
                questions={questionsToUse} 
            />
          ) : (
            <>
              {/* Display the current question */}
              <Question
                // image={images[currentQuestionIndex]}
                question={questionsToUse[currentQuestionIndex]} // Pass the current question as a prop
                onAnswer={handleAnswer} // Pass the answer handler function as a prop
              />
              <Feedback 
                feedback={feedback}
              />
            </>
          )}
          <QuestionTotal 
            currentQuestionIndex={currentQuestionIndex} 
            questionsToUse={questionsToUse}
          />
        </div>
      );
}

export default QuizPage