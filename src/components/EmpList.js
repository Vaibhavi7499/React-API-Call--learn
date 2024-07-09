import React, { Component } from "react";
import axios from "axios";
export class EmpList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEmp: [],
      forms: {
        fName: "Sama",
        lName: "Bodke",
        Address: "Classes",
      },
    };
  }

  /** POST Add new employee */

  createEmployee = () => {
    axios({
      url: "http://localhost:8000/employee",
      method: "POST",
      data: this.state.forms,
    })
      .then(() => {
        this.getEmployeeList();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  /** GET employee List */
  getEmployeeList() {
    setTimeout(() => {
      let urlAPI = "http://localhost:8000/employee";
      fetch(urlAPI)
        .then((emp) => emp.json())
        .then((empParse) => {
          this.setState({
            allEmp: empParse,
          });
        })
        .catch((err) => {
          console.warn("Error Occured");
        });
    }, 1000);
  }

  componentDidMount() {
    this.getEmployeeList();
  }

  updateEmp = (id) => {
    axios({
      url: `http://localhost:8000/employee/${id}`,
      method: "PUT",
      data: {
        id: id,
        fName: "SamaDhan",
        lName: "Bodke",
        Address: "Pune",
      },
    })
      .then((err) => {
        this.getEmployeeList();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  /** DELETE delete employee by id */
  deleteEmp = (id) => {
    axios({
      url: `http://localhost:8000/employee/${id}`,
      method: "DELETE",
    }).then((res) => {
      this.getEmployeeList();
    });
  };

  render() {
    return (
      <div>
      <label>First Name: </label>
      <input type="text"></input>{" "}
      <label>Last Name: </label>
      <input type="text"></input>{" "}
      <label>Address: </label>
      <input type="text"></input>
        <button onClick={this.createEmployee} className="btn btn-success">
          Add Emp
        </button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {!this.state.allEmp.length ? (
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            ) : (
              this.state.allEmp.map((empList) => (
                <tr>
                  <th scope="row">{empList?.id}</th>
                  <td>{empList?.fName}</td>
                  <td>{empList?.lName}</td>
                  <td>{empList?.Address}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.updateEmp(empList?.id)}
                    >
                      Edit
                    </button>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteEmp(empList?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmpList;
