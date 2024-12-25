function Progress({ currentQuestionName, numQuestions, points, pointSum }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={currentQuestionName - 1}></progress>
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
