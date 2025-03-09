function QuestionTotal({ currentQuestionIndex, questionsToUse }) {
    return <>
        {/* Display progress (current question number and total) */}
        {currentQuestionIndex < questionsToUse.length - 1 ? (
            <div className="questionsToUse-length-div">
              {currentQuestionIndex + 1} of {questionsToUse.length} 
              {/* Current question number */}
            </div>
          ) : (
            null
        )}
    </>
}
export default QuestionTotal