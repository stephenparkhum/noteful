import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    render() { 
        const folderListDisplay = this.props.folders.folders.map((folder) => {
            return <li><Link to={'/'}>{folder.name}</Link></li>
        })

        return ( 
            <>
                <ul>
                    {folderListDisplay}
                </ul>
            <button className="add_folder_btn">Add Folder</button>
            </>
         );
    }
}
 
export default Sidebar;
