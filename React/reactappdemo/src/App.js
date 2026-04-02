import Login from './Login';
import Product from './Product';
import Register from './Register';

// React js introduces a new syntax for writing presentation logic for
// component using
// JSX------
// Extensions for Javascript

function App() {
  return (
    <div className="App">
      <Home/>
      <hr />
    </div>
  );
}

// Function Component
function Home() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Transflower Learning Pvt. Ltd.</h1>
        <p>Mentor as a Service</p>
        <p>React JS Learning is a fun</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <p>Flowers</p>
            <p>Celebrate every moment using flowers</p>
          </div>

          

          <div className="col-sm-4">
            <Register></Register>
          </div>

          <div className="col-sm-4">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About us</h2>
      <h3>Transflower Agro Services</h3>
    </div>
  );
}

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

function Hello() {
  return (
    <div>
      <h2>Hello Component</h2>
      <h3>Welcome to Child component</h3>
    </div>
  );
}

export default App;
