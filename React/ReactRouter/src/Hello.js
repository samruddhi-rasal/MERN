import {useNavigate} from 'react-router-dom';
import Goodbye from './Goodbye';    
import react from 'react';

function Hello(){
    const navigate = useNavigate();

    return(
        <div>
            <h2>Welcome to transflower</h2>
            <button onClick={() => navigate("/goodbye")}>GoodBye</button>
        </div>
    );
}

export default Hello;