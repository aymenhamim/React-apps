import { useEffect } from "react";

function Timer({ dispatch, seconds }) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  useEffect(function () {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
