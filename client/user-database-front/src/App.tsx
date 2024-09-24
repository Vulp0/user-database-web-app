import './App.css';
import Homepage from "./Homepage";
import Signin from './Signin';
import Login from './Login';
import Dashboard from './Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='signin' element={<Signin />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
