import React from "react";
import ToDoItem from "./components/ToDoItem";
import todoData from "./components/todoData"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: todoData
    }
  }
  render() {
    const todos = this.state.data.map((item) => {
      return <ToDoItem task={item} key={item.id} />
    })
    return (
      <div>
        {todos}
      </div>
    )
  }
}

export default App;
