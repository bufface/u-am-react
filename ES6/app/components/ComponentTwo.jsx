import React from 'react';

class ComponentTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <h3>Component Two Using React.Component</h3>
        <p>Current Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ComponentTwo;
