import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavbarComp from './components/Navbar';

import FavList from './components/FavList '; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
    <NavbarComp/>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favlist" element={<FavList/>}></Route>
      </Routes>
  </>
  );
}

export default App;
