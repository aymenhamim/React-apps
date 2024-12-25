function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React QUIZ!</h2>
      <h3>{numQuestions} questions to test your React knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        L'ets Starts
      </button>
    </div>
  );
}

export default StartScreen;
