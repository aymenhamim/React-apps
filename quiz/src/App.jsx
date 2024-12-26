import { useEffect, useReducer } from "react";
import Main from "./AppMain";
import Header from "./Header";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading", // loading , error, ready, active; finished
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  seconds: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
        seconds: state.questions.length * SECS_PER_QUESTION,
      };

    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "NextQuestion":
      return { ...state, answer: null, index: state.index + 1 };

    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highScore:
          state.highScore > state.points ? state.highScore : state.points,
      };

    case "restartQuiz":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
        seconds: state.questions.length * SECS_PER_QUESTION,
      };

    case "tick":
      return {
        ...state,
        seconds: state.seconds - 1,
        status: state.seconds === 0 ? "finished" : state.status,
      };
    default:
      return new Error("this action is not valid");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highScore, seconds },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const pointSum = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(function () {
    async function getQuizs() {
      try {
        const data = await fetch(`http://localhost:3000/questions`);
        const questions = await data.json();

        dispatch({ type: "dataReceived", payload: questions });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    getQuizs();
  }, []);
  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              currentQuestionName={index + 1}
              points={points}
              pointSum={pointSum}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <footer>
              <Timer dispatch={dispatch} seconds={seconds} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            pointSum={pointSum}
            points={points}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
