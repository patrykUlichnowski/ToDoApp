import React from "react";

class ContentCard extends React.Component {
  render() {
    return (
      <div className='contact-card'>
        <img src={this.props.picture}></img>
        <h1>{this.props.name}</h1>
        <p>Phone: {this.props.phone}</p>
        <p>Email: {this.props.mail}</p>
      </div>
    )
  }
}

export default ContentCard;