import axios from "axios";
import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      phone: "",
      email: "",
    };
  }
  GetUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }
  GetPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  GetphoneNum(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  GetEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  setLoginData(obj) {
    axios({
      url: "http://localhost:8000/login",
      method: "POST",
      data: {
        username: obj.userName,
        password: obj.password,
      },
    }).then((res) => {});
  }

  registerUser() {
    axios({
      url: "http://localhost:8000/register",
      method: "POST",
      data: {
        username: this.state.username,
        password: this.state.password,
        phone: this.state.phone,
        email: this.state.email,
      },
    }).then((res) => {
      console.log(res);
      this.setState({
        username: "",
        password: "",
        phone: "",
        email: "",
      });
      let obj = { 
        userName: res.data.username,
         password: res.data.password
         };
      this.setLoginData(obj);
    });
  }
  Register = () => {
    this.registerUser();
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <label>username:</label>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => this.GetUserName(e)}
        />
        <br></br>
        <label>password:</label>
        <input
          type="password"
          value={this.state.password}
          onChange={(e) => this.GetPassword(e)}
        />
        <br></br>
        <label>phone:</label>
        <input
          type="text"
          value={this.state.phone}
          onChange={(e) => this.GetphoneNum(e)}
        />
        <br></br>
        <label>email:</label>
        <input
          type="text"
          value={this.state.email}
          onChange={(e) => this.GetEmail(e)}
        />
        <br></br>
        <button className="btn btn-success" onClick={this.Register}>
          Register
        </button>
      </div>
    );
  }
}

export default Register;
