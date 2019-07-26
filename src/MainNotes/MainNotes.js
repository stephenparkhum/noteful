import React, { Component } from 'react';
import './MainNotes.css';
import NoteList from '../NoteList/NoteList';

class MainNotes extends Component {
    render() { 


        return ( 
            <div className="main_app_container">
                <section className="main-right">
                    <NoteList list={this.props.list}/>
                </section>

            </div>
         );
    }
}
 
export default MainNotes;
