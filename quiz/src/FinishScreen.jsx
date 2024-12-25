function FinishScreen({ pointSum, points, highScore }) {
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
    </>
  );
}

export default FinishScreen;
