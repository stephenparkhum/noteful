import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import MainNotes from './MainNotes/MainNotes';
import FolderView from './FolderView/FolderView';
import FolderSidebar from './/FolderSidebar/FolderSidebar';
import Sidebar from './/Sidebar/Sidebar';
import NoteSidebar from './/NoteSidebar/NoteSidebar';
import NoteMain from './/NoteMain/NoteMain';
import folderNotes from './/dummy-store';

class App extends Component {
    state = {
      folderList: folderNotes,
      noteList: folderNotes.notes,
      activeFolder: '',
      activeNote: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1',
      noteIndex: 0,

    };

  updateActiveNote(activeNoteString) {
    this.setState({
      activeNote: activeNoteString
    });
  }

  render () {
    const findFolderID = (folderName) => {
      const folderID = this.state.folderList.find(folderName)
      this.updateActiveFolder(folderID);
    };

    const singleNoteDispay = (activeNote, noteIndex, noteList) => {
      return (<Route path={`/note/${activeNote}`} render={() => {
        return <NoteMain activeNote={activeNote} activeNoteIndex={noteIndex} noteList={noteList} updateActiveNote={this.updateActiveNote}/>
      }}/>)
    };


    return (
      <BrowserRouter>
      <div className="App">
          <header>
            <Route path='/' component={Header} />
          </header>
          <main>
          <div className="main_app_container">
              <section className="main-left">
                <Route path='/main' 
                    render={() => {
                      return <Sidebar folders={this.state.folderList} activeFolder={this.state.activeFolder} updateActiveFolder={this.updateActiveFolder}/>
                    }}/>
                <Route 
                    path='/folder' 
                    render={() => {
                      return <FolderSidebar folders={this.state.folderList} />
                    }}
                  />
                <Route 
                  path='/note' 
                  render={() => {
                    return <NoteSidebar actFolder={this.state.activeFolder}/>
                  }}/>
              </section>
              <section className="main-right">
                <Route 
                  path='/main' 
                  render={() => {
                    return <MainNotes list={this.state.folderList.notes} />
                  }} />
                <Route 
                  path='/folder' 
                  render={() => {
                    return <FolderView noteList={this.state.noteList} folderList={this.state.folderList} activeFolder={this.state.activeFolder}/>
                  }} />
                <Route path='/note' component={NoteMain} />
                {singleNoteDispay(this.state.activeNote, this.state.noteIndex, this.state.noteList)}
              </section>
  
          </div>
          
          </main>
      </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
