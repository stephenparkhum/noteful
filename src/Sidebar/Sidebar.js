import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    render() { 
        const {activeNote, folders, activeFolder, updateActiveFolder} = this.props;
        const folderListDisplay = folders.folders.map((folder, index) => {
            return <li key={index} onClick={() => (updateActiveFolder(`12345`))}><Link to={`/folder/${folder.id}`}>{folder.name}</Link></li>
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
