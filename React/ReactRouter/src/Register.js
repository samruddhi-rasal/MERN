import React from 'react';

class Register extends React.Component {
  render() {
    return (
      <div>
        <h3>New Customer Registration</h3>

        <form>
          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" className="form-control" id="firstname" />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" className="form-control" id="lastname" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me</label>
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;