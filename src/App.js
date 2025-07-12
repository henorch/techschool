import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import { Link, Route, Routes } from 'react-router-dom';
import Signin from './pages/authpage/signin';
import Signup from './pages/authpage/authpage';
import DashBoard from './pages/Dashboard/dashboard';
import {  GeneContextProvider } from './context/generalcontext';
import { curriculum } from './Data/data';


function HomePage(){
  return (
    <div className="App">
      <div className='top'>
      <h1>Welcome to Henorch Alliance</h1>
      <p>We transform and recreate</p>
      </div>
      <div className='bottom'>
      <Link to='/signin'> <Button btnname='sign in'  type="signin"/></Link>
      <Link to='/signup'> <Button btnname='sign up'  type="signup"/> </Link>
    </div>
    </div>
  );
}

function App() {
  console.log(curriculum);
  
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path='home' element={<DashBoard/>}/>
    </Routes>
  )
}

export default App;
