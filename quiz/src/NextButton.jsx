function NextButton({ dispatch, answer, index, numQuestions }) {
  if (index < numQuestions - 1)
    return (
      <>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "NextQuestion" })}
          >
            Next
          </button>
        )}
      </>
    );

  if (index === numQuestions - 1)
    return (
      <>
        {answer !== null && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finishQuiz" })}
          >
            Finish
          </button>
        )}
      </>
    );
}

export default NextButton;
