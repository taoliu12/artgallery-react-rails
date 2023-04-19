import React, { useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeButton from '../components/DarkModeButton';
// import SearchForm2 from '../containers/SearchForm2';

const NavBar = () => {

    return (
        <div className="navbar">
            <NavLink to="/artworks"><button className='nav-button'>Artworks</button></NavLink>         
            <NavLink to="/artwork/new"><button className='nav-button'>Submit Artwork</button></NavLink>   
            <NavLink to="/signup"><button className='nav-button'>Signup</button></NavLink>   
            <NavLink to="/login"><button className='nav-button'>Login</button></NavLink>   
            {/* <SearchForm2 /> */}
            <DarkModeButton />
        </div>
)}

export default NavBar;