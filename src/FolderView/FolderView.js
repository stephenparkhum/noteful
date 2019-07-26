import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FolderView.css';

class FolderView extends Component {
    render() { 
        const {activeFolder, noteList, folderList} = this.props;
        const displayNotes = (noteList, activeFolder) => {
            if (noteList !== undefined && activeFolder !== undefined) {
                return noteList.map((note, index) => {
                    if (note.folderId === activeFolder) {
                        return (<div key={index}>
                            <Link to={'/note'}><h2 className="note-list-title">{note.name}</h2></Link>
                            <p>{note.modified}</p>
                            <button className="delete-btn">DELETE NOTE</button>
                        </div>)
                    }
                    
                })
            }
        };

        return ( 
            <div>
                {displayNotes(noteList, activeFolder)}
            </div>
         );
    }
}
 
export default FolderView;