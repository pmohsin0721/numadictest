import React from 'react';
import '../Styles/home.css'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
        
         <div class="img-wrapper">
                <img class="img-responsive" src="images/logistic.jpg"  width="100%" height="650px" alt="logistic"/>
                <div class="img-overlay">
                    <Link to="/interactions">
                <button class="btn btn-md btn-success" >Place Interactions Page</button>
                </Link>
                <br />
                <Link to="/activities">
                <button class="btn btn-md btn-success">Vehicle Activity Page</button>
                </Link>
                </div>
         </div>
        </>
    );
}

export default Home;