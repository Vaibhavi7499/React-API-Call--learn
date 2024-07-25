import "./App.css";
import UserSearch from "./components/UserSearch";
import MovieSearch from "./components/MovieSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CountAuto from "./components/CountAuto";
import EmpList from "./components/EmpList";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import Register from "./components/Register";
import ExpenseTracker from "./components/ExpenseTracker";
import CounterFunc from "./components/CounterFunc";
import { useState } from "react";
import authContext from "./context/AuthContext";
import GetCounter from "./components/GetCounter";
import nameContext from "./context/NameContext";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("vaibhavi");
  let obj = {
    counter,
    setCounter,
  };

  return (
    <div className="App">
      {/* <MovieSearch/> */}
      {/* <UserSearch/> */}
      <authContext.Provider value={obj}>
        <nameContext.Provider value={{ name, setName }}>
          <BrowserRouter>
            <Layout />
            <Routes>
              <Route path="/userlist" element={<UserSearch />} />
              <Route path="/movielist" element={<MovieSearch />} />
              <Route path="/count" element={<CountAuto />} />
              <Route path="/emp-list" element={<EmpList />} />
              <Route path="/todo-list" element={<TodoList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/expense-tracker" element={<ExpenseTracker />} />
              <Route path="/counter-context" element={<CounterFunc />} />
              <Route path="/getcounter" element={<GetCounter />} />
            </Routes>
          </BrowserRouter>
        </nameContext.Provider>
      </authContext.Provider>
    </div>
  );
}

export default App;
