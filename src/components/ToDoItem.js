import React from "react";

class ToDoItem extends React.Component {

  render() {
    return (
      <div className='todo-item'>
        <input
          type='checkbox'
          checked={this.props.task.completed}
          onChange={(event) => {
            return this.props.handleChange(this.props.task.id)
          }}
        />
        <p
          className={this.props.task.completed ? "completed" : null}
        >
          {this.props.task.text}
        </p>
        <button onClick={() => { this.props.handleRemove(this.props.task.id) }}>x</button>
      </div>
    )
  }
}

export default ToDoItem;