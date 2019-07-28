import React, { Component } from 'react';
import 'date-fns/format';
import './NoteMain.css';

class NoteMain extends Component {
    render() { 
        const {noteList, activeNote, activeNoteIndex} = this.props;
        const noteDisplay = (noteList, activeNote, activeNoteIndex) => {
            if (noteList !== undefined && activeNote === noteList[activeNoteIndex].id) {
                return (
                    <div className="note-main">
                    <h1>{noteList[activeNoteIndex].name}</h1>
                    <p>{noteList[activeNoteIndex].content}</p>
                    <p><small>{noteList[activeNoteIndex].modified}</small></p>
                    </div>
                    )

            }
        };

        return ( 
            <>
                {noteDisplay(noteList, activeNote, activeNoteIndex)}
            </>
         );
    }
}
 
export default NoteMain;