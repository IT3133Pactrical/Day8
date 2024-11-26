import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
          </ul>
        </nav>
      <Routes>
          <Route path='/home'element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/contact'element={<Contactus/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
