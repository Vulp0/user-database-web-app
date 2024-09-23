import './App.css';
import Homepage from "./Homepage";
import Signin from './Signin';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='signin' element={<Signin />}></Route>
        <Route path='login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
