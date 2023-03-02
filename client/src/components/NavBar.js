import React, { useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeButton from '../components/DarkModeButton';

const NavBar = () => {

    return (
        <div className="navbar">
            <DarkModeButton />
            <NavLink to="/artworks"><button className='nav-button'>Artworks</button></NavLink>         
            <NavLink to="/artwork/new"><button className='nav-button'>Submit New Artwork</button></NavLink>   
        </div>
)}

export default NavBar;