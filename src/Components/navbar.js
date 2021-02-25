import React from 'react';
import {FaTruck} from 'react-icons/fa';
import '../Styles/navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
           <nav class="navbar navbar-dark bg-primary">
           <h1> <FaTruck /> Numadic</h1>
           <form class="form-inline">
             <Link to="/">
           <button class="button-home" >Home</button>
           </Link>
           </form>
           </nav>
        </>
    );

}

export default Navbar;

