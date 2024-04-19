import './App.css';
import Login from './components/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Inicio from './components/Inicio/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
