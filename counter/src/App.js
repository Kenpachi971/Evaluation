import React, { Component } from 'react';

class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter:1
    }
  }
  increment= () => {
      this.setState({
        counter: this.state.counter + 1   
      });
    };
    
    decrement= ()=> {
      this.setState({
        counter: this.state.counter - 1
      });
    };
     MyCounter= (counter) => {
      if (counter.length===10) {
          alert("over");
      }
    }
  render() {
    console.log("les props");
    return (
      <center>
      <div>
        <div>{this.state.counter}{this.MyCounter}</div> 
          <button onClick = {this.increment}>+</button> 
          <button onClick = {this.decrement}>-</button>
      </div>
      </center>
    );
  }
}

export default componentName;

