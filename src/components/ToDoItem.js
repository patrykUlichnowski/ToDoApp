import React from "react";

class ToDoItem extends React.Component {
  render() {
    return (
      <div className='todo-item'>
        <input
          type='checkbox'
          checked={this.props.task.completed}
          onChange={(event) => {
            return this.props.changeMethod(this.props.task.id)
          }}
        />
        <p
          className={this.props.task.completed ? "completed" : null}>
          {this.props.task.text}
        </p>
      </div>
    )
  }
}

export default ToDoItem;