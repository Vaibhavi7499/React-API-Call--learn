import React, { Component, createRef } from "react";

export class ClassRef extends Component {
  constructor() {
    super();
    this.myRef = createRef();
    this.btnRef = createRef();
  }

  click = () => {
    console.log(this.myRef.current.value, "abc");
  };

  componentDidMount() {
    this.myRef.current.focus();
    this.btnRef.current.click();
  }
  render() {
    return (
      <div>
        <h1>ClassRef</h1>
        <input type="text" ref={this.myRef} /> &nbsp;
        <button onClick={this.click} ref={this.btnRef} className="btn btn-primary">
          click
        </button>
      </div>
    );
  }
}

export default ClassRef;
