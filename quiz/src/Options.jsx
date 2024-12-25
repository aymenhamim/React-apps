function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((o, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""}
          ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={o}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswered}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

export default Options;
