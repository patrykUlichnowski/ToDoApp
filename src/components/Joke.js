import React from "react";

function Joke(props) {
  if (props.question != undefined) {
    return (
      <div className='joke'>
        <h1>{props.question}</h1>
        <p>{props.punchline}</p>
      </div>
    )
  } else {
    return (
      <div className='joke'>
        <p>{props.punchline}</p>
      </div>
    )
  }
}

export default Joke;

