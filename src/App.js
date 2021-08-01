import React from "react";
import ToDoItem from "./components/ToDoItem";
import Footer from "./components/Footer";
// import this.state.data from "./components/todoData"
class App extends React.Component {

  constructor() {
    super()
    let importedData = JSON.parse(localStorage.getItem("userList"))
    if (!importedData) {
      importedData = []
    }
    this.state = {
      data: importedData,
      newtodo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleAppending = this.handleAppending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  async handleRemove(id) {
    // removing object from the array
    const indextoremove = this.state.data.filter((item) => item.id !== id);
    await this.setState({
      data: indextoremove
    })
    await localStorage.setItem('userList', JSON.stringify(this.state.data));
  }

  async handleAppending() {
    // here we grab last key from already existing tasks and we push to our array new task with proper key
    let lastKey = 1
    if (this.state.data.length > 0) {
      lastKey = this.state.data[this.state.data.length - 1].id + 1;
    }
    await this.state.data.push({
      id: lastKey,
      text: this.state.newtodo,
      completed: false
    })
    // when the state is updated whole page is also render
    this.setState({
      data: this.state.data,
      newtodo: "",
    })
    await localStorage.setItem('userList', JSON.stringify(this.state.data));
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
      return <ToDoItem task={item} key={item.id} handleChange={this.handleChange} handleRemove={this.handleRemove} />
    })
    return (
      <div>
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
        <Footer />
      </div>
    )
  }
}

export default App;
