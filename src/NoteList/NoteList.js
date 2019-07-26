import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteList.css';

class NoteList extends Component {
    render() { 
        const noteDisplayList = this.props.list.map((note, index) => {
            return <div className="note-view" key={index}>
                <Link to={`/note/${note.id}`}><h2 className="note-list-title">{note.name}</h2></Link>
                <p>{note.modified}</p>
                <button className="delete-btn">DELETE NOTE</button>
            </div>
        }) 

        return ( 
            <div className="note_display_main">
                {noteDisplayList}
            </div>
         );
    }
}
 
export default NoteList;