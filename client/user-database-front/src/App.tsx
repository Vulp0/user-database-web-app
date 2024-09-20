import './App.css';
import Homepage from "./Homepage";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <div id="container">
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
