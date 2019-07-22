// Code ControlledInput Component Here

import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({
      //value: event.target.value 
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    //this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="myInput" value={this.state.value} onchange={this.handleChange} />
      </form>
    )
  }
}

export default ControlledInput