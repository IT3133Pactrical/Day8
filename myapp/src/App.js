import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contactus from './components/Contactus';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            {/* <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">ContactUs</Link></li> */}
            {/* <li><Link to="/login">Login</Link></li> */}
          </ul>
        </nav>
      <Routes>
          {/* <Route path='/home'element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/contact'element={<Contactus/>}/> */}
          <Route path='/login'element={<Login/>}/>
          <Route path='/dash'element={<Dashboard/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
