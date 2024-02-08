import React, { Component } from "react";

class ClassLifeCycle extends Component {
  constructor() {
    super();
    console.log("Called first. Dont call API here");
    this.state = {
      data: "",
      name: "X",
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component did mount called. API calling here");
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log(
      "Component did update called",
      preState.count,
      this.state.count
    );
  }
  shouldComponentUpdate() {
    console.log(
      "Should component update. Will trigger if component must be load or not",
      this.state.count
    );
    return false;
  }

  componentWillUnmount() {
    console.log(
      "Component will unmount did update called. It will destroythe child component, when not needed"
    );
  }

  render() {
    console.log(
      "Render. called when load and then again loads if any state/props update"
    );
    return (
      <>
        <h1>Hello World {this.state.count}</h1>
        {/* <h1>Props {this.props.name}</h1> */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update name
        </button>
      </>
    );
  }
}

export default ClassLifeCycle;
