import {useNavigate} from 'react-router-dom';
import react from 'react';
import Hello from './Hello';

function Goodbye(){
    const navigate = useNavigate();
    
    return( 
        <div>
            <h2>Goodbye from Transflower</h2>
            <button onClick={() => navigate("/")}>Hello</button>
        </div>
    );
}

export default Goodbye;