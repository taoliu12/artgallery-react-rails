import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className="navbar">
        <h2>

        <NavLink to="/artworks">Artworks</NavLink>
        <span> | </span>
        <NavLink to="/artwork/new">Submit</NavLink>
        <span> | </span>
        <NavLink to="/challenges">Challenges</NavLink>
        <span> | </span>
        <NavLink to="/about">About</NavLink>
        </h2>
    </div>
)}

export default NavBar;