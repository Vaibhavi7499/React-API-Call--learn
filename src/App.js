
import './App.css';
import UserSearch from './components/UserSearch';
import MovieSearch from './components/MovieSearch';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import CountAuto from './components/CountAuto';
import EmpList from './components/EmpList';
import TodoList from './components/TodoList';
import Login from './components/Login';
import Register from './components/Register';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <div className="App">
      {/* <MovieSearch/> */}
      {/* <UserSearch/> */}
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/userlist' element={<UserSearch/>}/>
        <Route path='/movielist' element={<MovieSearch/>}/>
        <Route path='/count' element={<CountAuto/>}/>
        <Route path='/emp-list' element={<EmpList/>}/>
        <Route path='/todo-list' element={<TodoList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/expense-tracker' element={<ExpenseTracker/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
