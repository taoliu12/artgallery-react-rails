import * as React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

export default function NavbarButton({item, route}) {

    return (
        <Link className='top-nav-bar-link' style={{color: 'white'}} to={route}>
            <Button                 
            sx={{mx: .7, my: 2, fontSize: '1.2rem', color: 'white', display: 'block', boxShadow: '0px 0px 3px #00000', }}
            >
                {item}
            </Button>
        </Link>
        )
}