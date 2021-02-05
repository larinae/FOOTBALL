import React from 'react';
import {Toolbar, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';


const Header = () => {

    return (
            <Toolbar style ={{ background:'black' }}>
                <Link to="/" style={{ color: 'white', marginLeft: 650 }}>
                    <Typography >
                        TOP 7 LEAGUES
                    </Typography>
                </Link>
            </Toolbar>

    );
};

export default Header;