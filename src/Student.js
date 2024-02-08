import React, { Component } from "react";
function Student(props) {
  return (
    <>
      <div style={{ backgroundColor: "grey", margin: 10 }}>
        <h1>
          Student : {props.name} {props.email}
        </h1>
        {/* <h1>
          Address : {props.other.add} {props.other.zip}
        </h1> */}
        <h1>Contact: {props.contact}</h1>
      </div>
    </>
  );
}
// class Student extends Component {
//   render() {
//     return (
//       <>
//         <h1>Class component : Student</h1>
//         <p>{this.props.name}</p>
//       </>
//     );
//   }
// }
export default Student;
