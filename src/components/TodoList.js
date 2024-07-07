import React, { Component } from "react";
import axios from "axios";
class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDos: [],
      inputValue: "",
      isUpdate: false,
      id: "",
    };
  }
  componentDidMount() {
    this.getTodos();
  }
  getTodos() {
    axios
      .get("http://localhost:8000/todoList")
      .then((res) => {
        this.setState({
          toDos: res.data,
        });
      })
      .catch((err) => {
        console.warn(err);
      });
  }
  InputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  AddItem = () => {
    if (this.state.isUpdate) {
      axios({
        url: `http://localhost:8000/todoList/${this.state.id}`,
        method: "PUT",
        data: { todoName: this.state.inputValue },
      }).then((res) => {
        this.getTodos();
        this.setState({
            inputValue:"",
            isUpdate:false
        })
      });
    } else {
      axios({
        url: "http://localhost:8000/todoList",
        method: "POST",
        data: { todoName: this.state.inputValue },
      }).then((res) => {
        this.getTodos();
        this.setState({
          inputValue: "",
        });
      });
    }
  };
  DeleteItem = (id) => {
    axios({
      url: `http://localhost:8000/todoList/${id}`,
      method: "DELETE",
    }).then((res) => {
      this.getTodos();
    });
  };
  UpdateItem = (obj) => {
    this.setState({
      inputValue: obj.todoName,
      isUpdate: true,
      id: obj.id,
    });
  };
  render() {
    console.log(this.state.inputValue);
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(ele) => this.InputValue(ele)}
        />
        <button onClick={this.AddItem}>
          {this.state.isUpdate ? "Update" : "Add"}
        </button>
        <div>
          <ul>
            {this.state.toDos.map((e) => (
              <li key={e.id}>
                {e.todoName}{" "}
                <button onClick={() => this.DeleteItem(e.id)}>delete</button>{" "}
                <button onClick={() => this.UpdateItem(e)}>update</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
