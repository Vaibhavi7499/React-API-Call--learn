import axios from "axios";
import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      formData: [],
    };
  }
  getUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }
  getPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  getFormData() {
    axios
      .get("http://localhost:8000/login")
      .then((res) => {
        res.data.forEach(element => {   
          if (
            element.username == this.state.username &&
            element.password == this.state.password
          ) {
            alert("Login Successfully");
          }else{
              alert("Check the username and password")
          }
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  }
  // componentDidMount(){
  //     this.getFormData()
  // }
  ClickButton = () => {
    this.getFormData();
  };
  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => this.getUserName(e)}
        /><br></br>
        <input
          type="password"
          value={this.state.password}
          onChange={(e) => this.getPassword(e)}
        /><br></br>
        <button className="btn btn-success" onClick={this.ClickButton}>
          login
        </button>
      </div>
    );
  }
}

export default Login;
