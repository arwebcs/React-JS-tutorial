import React, { PureComponent } from "react";

class PureComponents extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("Render");
    return (
      <>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: 1 })}>
          Update count
        </button>
      </>
    );
  }
}

export default PureComponents;
