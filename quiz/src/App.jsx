import { useEffect, useReducer } from "react";
import Main from "./AppMain";
import Header from "./Header";

const initialState = {
  questions: [],
  status: "loading", // loading , error, ready, active; finished
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

    default:
      return new Error("this action is not valid");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function getQuizs() {
      try {
        const data = await fetch(`http://localhost:3000/questions`);
        const questions = await data.json();
        console.log(questions);

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
      <Main />
    </div>
  );
}

export default App;
