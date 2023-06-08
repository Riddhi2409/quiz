import React from "react";
import {Routes,Route} from "react-router-dom"

import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz  />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </div>
  );
}

export default App;
