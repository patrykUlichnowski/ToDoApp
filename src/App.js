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
      //setState always have to return updated state, it can depend on previousState or can be just set up like it is in the constructor
      const flippedArray = prevState.data.map((todo) => {
        // Here our todo is actually a cell of array like data[0]
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
      <div className='todo-wrap'>
        <div className='todo-header'>
          <h1>Your "todo" list</h1>
        </div>
        {todos}
      </div>
    )
  }
}

export default App;
