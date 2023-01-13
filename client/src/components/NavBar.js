import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className="navbar">         
        <NavLink to="/artworks"><button>Artworks</button></NavLink>         
        <NavLink to="/artwork/new"><button>Submit New Artwork</button></NavLink>   
    </div>
)}

export default NavBar;