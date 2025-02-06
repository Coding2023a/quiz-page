function QuestionTotal({ currentQuestion, questionsToUse }) {
    return <>
        {/* Display progress (current question number and total) */}
        {currentQuestion < questionsToUse.length - 1 ? (
            <div className="questionsToUse-length-div">
              {currentQuestion + 1} of {questionsToUse.length} 
              {/* Current question number */}
            </div>
          ) : (
            null
        )}
    </>
}
export default QuestionTotal