import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import List from './list';
import Register from './Register';
import Orders from './Orders';
import Hello from './Hello';
import Goodbye from './Goodbye';

// Class Component
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Hello" component={Hello} />
          <Route path="/" component={Goodbye} />
        </Routes>
      </Router>
      
    </div>
  );
}

// Function Component
function BasicRouting() {
  return (
    <div>
      <h1>Transflower Store</h1>
      <hr />

      <Router>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact us</Link> |
        <Link to="/flowers">Flowers</Link> |
        <Link to="/order">Order</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/register">Register</Link>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flowers" element={<List />} />
          <Route path="/order" element={<Orders />} /> {/* ✅ FIXED */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

// Home Component
function Home() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Transflower Learning Pvt. Ltd.</h1>
        <p>Mentor as a Service</p>
        <p>React JS Learning is fun</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <p>Flowers</p>
            <p>Celebrate every moment using flowers</p>
          </div>

          <div className="col-sm-4">
            <Register />
          </div>

          <div className="col-sm-4">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
      <h2>About us</h2>
      <h3>Transflower Agro Services</h3>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <h3>Transflower Farms</h3>
      <p>Tambade Mala</p>
      <p>Manchar Tal. Ambegaon</p>
      <p>Dist: Pune</p>
    </div>
  );
}

export default App;