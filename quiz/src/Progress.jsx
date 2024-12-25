function Progress({ currentQuestionName, numQuestions, points, pointSum }) {
  return (
    <header className="progress">
      <progress max={pointSum} value={points}></progress>
      <p>
        Question <strong>{currentQuestionName}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{pointSum}
      </p>
    </header>
  );
}

export default Progress;
