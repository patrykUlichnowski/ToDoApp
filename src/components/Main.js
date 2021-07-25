import React from "react";
import "./Main.css"

class Main extends React.Component {
  render() {
    return (
      <div class='component'>
        <input type='checkbox'></input>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Main;