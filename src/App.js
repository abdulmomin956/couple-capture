import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
