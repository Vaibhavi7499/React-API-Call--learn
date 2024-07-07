import React, { Component } from "react";

export class CountAuto extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {};
  }

  componentDidMount() {
    this.countDownInterval = setInterval(() => {
      console.log("test1");
    }, 1000);
  }

  static getDerivedStateFromProps() {
    console.log("getStatederivedFromProps");
  }
  componentWillUnmount() {
    clearInterval(this.countDownInterval);
  }
  render() {
    return (
      <div>
        {this.countDownInterval}
        <h1>count</h1>
      </div>
    );
  }
}

export default CountAuto;
