import React, { Component } from 'react';
import './NoteMain.css';

class NoteMain extends Component {
    render() { 
        const noteDisplay = function(activeNote, noteList, noteIndex) {
            console.log(noteList[noteIndex]);
        };

        return ( 
            <>
                {noteDisplay(this.props.activeNote, this.props.noteList, this.props.activeNoteIndex)}
            </>
         );
    }
}
 
export default NoteMain;
