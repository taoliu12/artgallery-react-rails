import React, { useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    useEffect(() => {
        // code to run after render goes here
        console.log('navBar')
        let nav = document.querySelector(".navbar");
        let sticky = nav.offsetTop;
        window.onscroll = function() {
            sticker()};
            
            function sticker() {
                console.log(sticky)
            if (window.pageYOffset >= sticky) {
                nav.classList.add("sticky")
            } else {
              nav.classList.remove("sticky");
            }
        }
    });

    return (
        <div className="navbar">         
            <NavLink to="/artworks"><button>Artworks</button></NavLink>         
            <NavLink to="/artwork/new"><button>Submit New Artwork</button></NavLink>   
        </div>
)}

export default NavBar;