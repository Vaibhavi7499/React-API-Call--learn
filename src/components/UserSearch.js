import React, { Component } from "react";
import UserList from "./UserList";

class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      oldValues: [],
      names: [
        { id: 1, name: "vaibhavi" },
        { id: 2, name: "kishor" },
        { id: 3, name: "vaishnavi" },
        { id: 4, name: "rutuja" },
        { id: 5, name: "samadhan" },
        { id: 6, name: "kishor" },
      ],
    };
  }
  getInputValue(e) {
    if (e.target.value == "") {
      this.setState({
        names: this.state.oldValues.length
          ? this.state.oldValues
          : this.state.names,
        inputValue: "",
      });
    }
    this.setState({
      inputValue: e.target.value,
    });
  }
  clickMe = () => {
    this.setState({
      oldValues: this.state.names,
      names: this.state.names.filter((e) => {
        return e.name == this.state.inputValue;
      }),
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search by name"
          value={this.state.inputValue}
          onChange={(e) => this.getInputValue(e)}
        />
        <button onClick={this.clickMe}>search</button>
        <UserList names={this.state.names} />
      </div>
    );
  }
}

export default UserSearch;
