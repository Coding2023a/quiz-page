import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import './App.css';

const questions = [
  { question: "What is the date of the passing of the first Chabad Rebbe, Rabbi Shneur Zalman of Liadi (Alter Rebbe)?", options: ["24th of Tevet", "10th of Shevat", "15th of Av"], answer: "24th of Tevet" },
  { question: "On which date is the birthday of Rabbi Menachem Mendel Schneerson, the Lubavitcher Rebbe (Rebbe)?", options: ["11th of Nissan", "18th of Elul", "27th of Adar"], answer: "11th of Nissan" },
  { question: "What is the date of the anniversary of the release of Rabbi Shneur Zalman of Liadi (Alter Rebbe) from imprisonment?", options: ["19th of Kislev", "22nd of Shevat", "5th of Cheshvan"], answer: "19th of Kislev" },
  { question: "Which date marks the passing of Rabbi Yosef Yitzchak Schneersohn, the sixth Lubavitcher Rebbe (Rayatz)?", options: ["10th of Shevat", "5th of Tevet", "9th of Kislev"], answer: "10th of Shevat" },
  { question: "When is the yahrzeit of Rabbi Shalom Dovber Schneersohn, the fifth Lubavitcher Rebbe (Rebbe Maharash)?", options: ["2nd of Nissan", "10th of Tevet", "14th of Adar"], answer: "2nd of Nissan" },
  { question: "Which date is observed as the passing of the Rebbe's father, Rabbi Levi Yitzchak Schneerson (Rebbe Levi Yitzchak)?", options: ["20th of Av", "3rd of Tammuz", "12th of Tishrei"], answer: "20th of Av" },
  { question: "On which date do Chabad Chassidim celebrate the birth of the Rebbe's mother, Rebbetzin Chana Schneerson (Rebbetzin Chana)?", options: ["25th of Elul", "10th of Adar", "21st of Tishrei"], answer: "25th of Elul" },
  { question: "What is the date of the passing of Rabbi Menachem Mendel Schneerson's wife, Rebbetzin Chaya Mushka (Rebbetzin Chaya Mushka)?", options: ["22nd of Shevat", "1st of Kislev", "27th of Adar"], answer: "22nd of Shevat" },
  { question: "Which date is observed as the Yahrzeit of the Alter Rebbe's wife, Rebbetzin Devorah Leah (Rebbetzin Devorah Leah)?", options: ["10th of Tevet", "15th of Kislev", "12th of Cheshvan"], answer: "10th of Tevet" },
];


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleAnswer = (answer) => {
    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = correctAnswer === answer;

    setFeedback(isCorrect ? 'Correct!' : 'Incorrect.');

    setTimeout(() => {
      setFeedback('');
      setUserAnswers([...userAnswers, answer]);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 2000);
  };

  return (
    <div className="app">
      {showResults ? (
        <Result answers={userAnswers} questions={questions} />
      ) : (
        <>
          <Question
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
          {feedback && <div className={`feedback ${feedback === 'Correct!' ? 'correct' : 'incorrect'}`}>{feedback}</div>}
        </>
      )}
      {currentQuestion < questions.length - 1 ? (
        <div className="questions-length-div">
          {currentQuestion + 1} of {questions.length}
        </div>
        ) : (
          null
        )
      }
    </div>
  );
};

export default App;
