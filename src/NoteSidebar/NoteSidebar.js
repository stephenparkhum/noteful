import React, { Component } from 'react';
import './NoteSidebar.css';

class NoteSidebar extends Component {
    render() { 
        const {activeFolder} = this.props;

        return ( 
            < >
            <button className="back-btn">Go Back</button>
            <h2>{activeFolder}</h2>
            </ >
         );
    }
}
 
export default NoteSidebar;
