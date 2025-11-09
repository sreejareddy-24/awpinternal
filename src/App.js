import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello, welcome to Lifecycle Demo!"
    };
    console.log("Constructor: Component is created");
  }

  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: Component has been updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component will be removed");
  }

  changeMessage = () => {
    this.setState({ message: "State has been updated!" });
  }

  render() {
    console.log("Render: Component is rendering");
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
        <h2>React Lifecycle Example</h2>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>Update Message</button>
        <p>Check the console to see lifecycle method messages.</p>
      </div>
    );
  }
}

export default LifecycleExample;