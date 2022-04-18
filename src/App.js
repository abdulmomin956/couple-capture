import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import CheckOut from './pages/CheckOut/CheckOut';
import Header from './shared/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './shared/Footer/Footer';
import RequireAuth from './pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <div className="">
        <Header></Header>
        <div className='d-flex flex-column justify-content-between'>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/checkout' element={
              <RequireAuth>
                <CheckOut></CheckOut>
              </RequireAuth>
            }></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
