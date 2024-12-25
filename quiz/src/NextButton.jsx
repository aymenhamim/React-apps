function NextButton({ dispatch, answer }) {
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
}

export default NextButton;
