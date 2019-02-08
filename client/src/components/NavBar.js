import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className="navbar">
        <NavLink to="/artworks">Artworks</NavLink>
        <span> | </span>
        <NavLink to="artworks/new">Submit</NavLink>
    </div>
)}

export default NavBar;