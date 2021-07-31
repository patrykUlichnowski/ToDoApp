import React from "react";
import ToDoItem from "./components/ToDoItem";
import todoData from "./components/todoData"
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      data: todoData,
      newtodo: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleAppending = this.handleAppending.bind(this)
  }

  async handleAppending() {
    // here we grab last key from already existing tasks and we push to our array new task with proper key
    const lastKey = todoData[todoData.length - 1].id;
    await todoData.push({
      id: lastKey + 1,
      text: this.state.newtodo,
      completed: false
    })
    // when the state is updated whole page is also render
    this.setState({
      data: todoData,
      newtodo: "",
    })
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

  handleInput(event) {
    // this must exist because react is dumb and cant auto set value of inputs
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    // maping all items from list to array of new components
    const todos = this.state.data.map((item) => {
      return <ToDoItem task={item} key={item.id} handleChange={this.handleChange} />
    })
    return (
      <div className='todo-wrap'>
        <div>
          {/* here is all user tasks */}
          <div className='todo-header'>
            <h1>List of things you have to do!</h1>
          </div>
          {todos}
        </div>
        {/* here user can add new task to his list */}
        <div className="adding-task">
          <input
            type='text'
            name='newtodo'
            value={this.state.newtodo}
            onChange={this.handleInput}
          />
          <button onClick={this.handleAppending}>add task</button>
        </div>
      </div>
    )
  }
}

export default App;
