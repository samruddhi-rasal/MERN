import './App.css';
import Login from './Login';
import Register from './Register';
import Products from './Product';


// React  js introduces a new synatx for wriiting presentation
// logic for component using 
// JSX ---- JavaScript extension for XML
function App() {
  return (
    <div className="App">
      <Login></Login>
      <hr/>
      <Register></Register>
      <hr/>
      <Hello></Hello>
      <hr/>
      <Products></Products>
    </div>
  );
}

//function Component 
function Hello(){
  return(
    <div>
      <h3>Hello, World!</h3>
      <h3>Wellcome to React</h3>
    </div>
  )
}

export default App;
