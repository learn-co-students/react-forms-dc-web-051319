import React, { Component } from 'react';

class ControlledInput extends Component {
   state = {
      firstName: '',
      lastName: '',
      checked: false,
      radio: false,
      greet: ''
   }

   handleChange = event => this.setState({ [event.target.id]: event.target.value });
   
   handleChecked = event => this.setState({ checked: event.target.checked });

   handleRadio = event => this.setState({ radio: event.target.checked });

   handleSelect = event => this.setState({ greet: event.target.value });
    
   render() { 
      return (
         <form>
            <input placeholder='firstname' type='text' id='firstName' onChange={this.handleChange} value={this.state.firstName} />
            <input placeholder='lastname' type='text' id='lastName' onChange={this.handleChange} value={this.state.lastName} />
            <input type='checkbox' onChange={this.handleChecked} value={this.state.checked} />
            <input type='radio' onChange={this.handleRadio} value={this.state.radio} />
            <select onChange={this.handleSelect} value={this.state.greet}>
               <option value="" selected disabled hidden>Choose here</option>
               <option>Good Morning</option>
               <option>Good AfterNoon</option>
               <option>Good Evening</option>
               <option>Good Night</option>
            </select>
         </form>
      );
   }
}
 
export default ControlledInput;