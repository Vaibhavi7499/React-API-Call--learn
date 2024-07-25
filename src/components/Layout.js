import React, { Component } from "react";
import { Link } from "react-router-dom";
class Layout extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link className="nav-link" to="/userlist">
                  User List
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/movielist">
                  Movie List
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/count">
                  count
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/emp-list">
                  Emp List
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/todo-list">
                  To List
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/expense-tracker">
                  Expense Tracker
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/counter-context">
                  Couter Context{" "}
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/getcounter">
                  Get Counter{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Layout;
