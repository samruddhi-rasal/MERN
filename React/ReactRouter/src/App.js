import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Products from "./Product";
import List from "./list";
import Orders from "./Orders";
import Hello from "./Hello";
import Goodbye from "./Goodbye";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/goodbye" element={<Goodbye />} />
        </Routes>
      </Router>
    </div>
  );
}

// ✅ Updated BasicRouting
function BasicRouting() {
  return (
    <div>
      <h1>Basic Routing</h1>

      <Router>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/orders">Orders</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>

        {/* ✅ Switch → Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

// Home Component (no change needed)
function Home() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="display-4">Transflower Learning Pvt. Ltd.</h1>
        <p className="lead">Mentor as a Service</p>
        <p>React JS Learning is a fun</p>
      </div>

      <hr />

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3>Flowers</h3>
            <p>We have a wide variety of flowers</p>
          </div>

          <div className="col-sm-4">
            <h3>Plants</h3>
            <p>We have a wide variety of plants</p>
          </div>

          <div className="col-sm-4">
            <h3>Gardening Tools</h3>
            <p>We have a wide variety of gardening tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;