import { createContext, useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

import "./App.css"

export const DataContext = createContext();

function App() {
  // setting page on app
  const [appPage, setAppPage] = useState("menu");

  // check score
  const [score,setScore] = useState(0)

  return (
    <DataContext.Provider value={{ appPage, setAppPage, score, setScore }}>
      <div className="App">
        <h1>Quiz App by React</h1>
        {appPage === "menu" && <Menu />}
        {appPage === "quiz" && <Quiz />}
        {appPage === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
