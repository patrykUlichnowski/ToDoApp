import React from "react";
import ToDoItem from "./components/ToDoItem";
import todoData from "./components/todoData"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState((prevState) => {
      const flippedArray = prevState.data.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
      return {
        data: flippedArray
      };
    })
  }
  render() {
    const todos = this.state.data.map((item) => {
      return <ToDoItem task={item} key={item.id} changeMethod={this.handleChange} />
    })
    return (
      <div>
        {todos}
      </div>
    )
  }
}

export default App;
