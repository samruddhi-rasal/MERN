import React from 'react';


//Class Component
class Register extends React.Component {

    render(){
        return(
            <div>
                <h3>New User</h3>
                <form>
                    <lable>First Name</lable>
                    <input type ="text" name ="firstname"/>
                    <br/>
                    <lable>Last Name</lable>
                    <input type ="text" name ="lastname"/>
                    <br/>
                    <lable>User Name</lable>
                    <input type="text" name="username"/>
                    <br/>
                    <lable>Password</lable>
                    <input type="password" name="password"/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Register;