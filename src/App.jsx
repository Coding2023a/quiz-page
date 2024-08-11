import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import './App.css';

const questions = [
  { question: "Who was the founder of Chabad Chassidus?", options: ["Rabbi Shneur Zalman of Liadi", "Rabbi Yosef Yitzchak Schneersohn", "Rabbi Menachem Mendel Schneerson"], answer: "Rabbi Shneur Zalman of Liadi" },
  { question: "What is the name of the Chabad Rebbe who is referred to as the 'Alter Rebbe'?", options: ["Rabbi Menachem Mendel Schneerson", "Rabbi Shneur Zalman of Liadi", "Rabbi Yosef Yitzchak Schneersohn"], answer: "Rabbi Shneur Zalman of Liadi" },
  { question: "Who was the Rebbe known for his teachings on the concept of 'Moshiach' and redemption?", options: ["Rabbi Menachem Mendel Schneerson", "Rabbi Shalom Dovber Schneersohn", "Rabbi Aharon of Chernobyl"], answer: "Rabbi Menachem Mendel Schneerson" },
  { question: "What is the primary focus of Chabad Chassidus teachings?", options: ["Mysticism and Kabbalah", "The inner dimension of Torah", "Historical events"], answer: "The inner dimension of Torah" },
  { question: "What is the name of the Chabad prayer for the welfare of the Jewish people and the coming of Moshiach recited on Shabbat?", options: ["Kaddish", "Mi Sheberach", "Tefillat HaShlach"], answer: "Mi Sheberach" },
  { question: "Which Chabad Rebbe is associated with the 'Sefer HaTanya,' a foundational text of Chabad philosophy?", options: ["Rabbi Shneur Zalman of Liadi", "Rabbi Menachem Mendel Schneerson", "Rabbi Yosef Yitzchak Schneersohn"], answer: "Rabbi Shneur Zalman of Liadi" },
  { question: "What is the name of the Chabad outreach program designed to encourage Jews to put on tefillin?", options: ["Mivtza Tefillin", "Mivtza Shabbat", "Mivtza Kashrut"], answer: "Mivtza Tefillin" },
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
    }, 1000);
  };

  return (
    <div className="app">
      <div className="questions-length-div">
        {currentQuestion + 1} of {questions.length}
      </div>
      {showResults ? (
        <Result answers={userAnswers} questions={questions} />
      ) : (
        <>
          <Question
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
          {feedback && <div className="feedback">{feedback}</div>}
        </>
      )}
    </div>
  );
};

export default App;
