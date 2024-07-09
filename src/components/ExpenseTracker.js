import axios from "axios";
import React, { Component } from "react";

class ExpenseTracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expense: [],
      inputExpense: "",
      inputAmount: "",
      isUpdate: false,
      id: "",
    };
  }
  GetExpense() {
    axios
      .get("http://localhost:8000/expense")
      .then((res) => {
        console.log(res);
        this.setState({
          expense: res.data,
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  }
  componentDidMount() {
    this.GetExpense();
  }
  GetInputValue(e) {
    this.setState({
      inputExpense: e.target.value,
    });
  }
  GetInputAmount(e) {
    this.setState({
      inputAmount: e.target.value,
    });
  }
  AddExpense = () => {
    if (this.state.inputExpense == "" && this.state.inputAmount == "") {
      alert("Please enter expense and amount");
    } else {
      let url = "http://localhost:8000/expense";

      let payload = {
        expense: this.state.inputExpense,
        amount: this.state.inputAmount,
      };
      if (this.state.isUpdate) {
        axios({
          url: `http://localhost:8000/expense/${this.state.id}`,
          method: "PUT",
          data: payload,
        }).then((res) => {
          this.GetExpense();
          this.setState({
            inputExpense: "",
            inputAmount: "",
            isUpdate: false,
          });
        });
      } else {
        axios({
          url: url,
          method: "POST",
          data: payload,
        }).then((res) => {
          this.GetExpense();
          this.setState({
            inputExpense: "",
            inputAmount: "",
          });
        });
      }
    }
  };
  UpdateExpense = (obj) => {
    this.setState({
      isUpdate: true,
      inputExpense: obj.expense,
      inputAmount: obj.amount,
      id: obj.id,
    });
  };
  DeleteExpense = (id) => {
    axios({
      url: `http://localhost:8000/expense/${id}`,
      method: "DELETE",
    }).then((res) => {
      this.GetExpense();
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Expense name"
          value={this.state.inputExpense}
          onChange={(e) => this.GetInputValue(e)}
        />{" "}
        <input
          type="text"
          placeholder="Amount"
          value={this.state.inputAmount}
          onChange={(e) => this.GetInputAmount(e)}
        />
        {" "}
        <button className="btn btn-primary" onClick={this.AddExpense}>
          {this.state.isUpdate ? "Update transaction " : "Add transaction"}
        </button>
        <div>
          <table className="table table-light table-bordered mt-2">
            <thead className="thead-light">
              <tr>
                <th scope="col">Expense Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {!this.state.expense.length ? (
                <h2>No record found</h2>
              ) : (
                this.state.expense.map((e) => (
                  <tr>
                    <td>{e.expense}</td>
                    <td>{e.amount}</td>
                    <td>
                      <button className="btn btn-success" onClick={() => this.UpdateExpense(e)}>
                        update
                      </button>{" "}
                      <button  className="btn btn-danger" onClick={() => this.DeleteExpense(e.id)}>
                        delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ExpenseTracker;
