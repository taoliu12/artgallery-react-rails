import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className="navbar">
        <NavLink to="/">Artworks</NavLink>
        <span> | </span>
        <NavLink to="/new">Submit</NavLink>
    </div>
)}

export default NavBar;