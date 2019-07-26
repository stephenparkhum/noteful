import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
    render() { 
        return ( 
            <>
                <h1><Link to={"/main"}>Noteful</Link></h1>
            </>
         );
    }
}
 
export default Header;