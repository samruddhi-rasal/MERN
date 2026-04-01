import React from 'react';


//Class Component
class Login extends React.Component {

    render(){
        return(
            <div>
                <form>
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

export default Login;