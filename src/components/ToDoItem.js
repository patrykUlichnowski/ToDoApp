import React from "react";

class ToDoItem extends React.Component {
  render() {
    return (
      <div className='todo-item'>
        <input type='checkbox' />
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default ToDoItem;