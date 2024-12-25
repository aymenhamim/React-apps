function Options({ question }) {
  return (
    <div className="options">
      {question.options.map((o) => (
        <button key={o} className="btn btn-option">
          {o}
        </button>
      ))}
    </div>
  );
}

export default Options;
