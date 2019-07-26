import React, { Component } from 'react';
import './NoteList.css';

class NoteList extends Component {
    render() { 
        const noteDisplayList = this.props.list.map((note) => {
            return <div>
                <h2>{note.name}</h2>
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