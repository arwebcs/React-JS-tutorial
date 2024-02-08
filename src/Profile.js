import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: "dd",
    };
  }
  apple() {
    this.setState({ data: "ee" });
  }
  render() {
    return (
      <>
        <h1>Class component : Profile</h1>
        <p>{this.state.data}</p>
        <button onClick={() => this.apple()}>Update</button>
      </>
    );
  }
}

export default Profile;
