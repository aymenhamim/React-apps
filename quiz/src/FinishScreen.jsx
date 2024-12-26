function FinishScreen({ pointSum, points, highScore, dispatch }) {
  const percentage = (points / pointSum) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😊";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored {points} out of {pointSum} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High-score: {highScore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
