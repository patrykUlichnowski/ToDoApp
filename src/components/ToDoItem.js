import React from "react";

class ToDoItem extends React.Component {
  render() {
    return (
      <div className='todo-item'>
        <input
          type='checkbox'
          checked={this.props.task.completed}
        />
        <p>{this.props.task.text}</p>
      </div>
    )
  }
}

export default ToDoItem;