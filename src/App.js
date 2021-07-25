import React from "react";
import ToDoItem from "./components/ToDoItem"
import ContentCard from "./components/ContentCard";
import Joke from "./components/Joke";

function App() {
  return (
    <div>
      <Joke question='whos fat' punchline='your mom' />
      <Joke punchline='your mom so fat she died' />
      <Joke question='joe' punchline='joe mama' />
    </div>
  )
}

export default App;
