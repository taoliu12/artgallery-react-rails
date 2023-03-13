import React, { useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeButton from '../components/DarkModeButton';

const NavBar = () => {

    return (
        <div className="navbar">
            <NavLink to="/artworks"><button className='nav-button'>Artworks</button></NavLink>         
            <NavLink to="/artwork/new"><button className='nav-button'>Submit New Artwork</button></NavLink>   
            <DarkModeButton />
        </div>
)}

export default NavBar;