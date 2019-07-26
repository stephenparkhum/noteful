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
  constructor(props) {
    super(props);
    this.state = {
      folderList: folderNotes.folders,
      noteList: folderNotes.notes,
      activeFolder: '',
      activeNote: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1',
      noteIndex: '0',

    };
  }

  updateActiveFolder(folderId) {
      this.setState({
        activeFolder: folderId
      });
  }

  updateActiveNote(activeNoteId) {
    this.setState({
      activeNote: activeNoteId
    });
  }

  updateNoteIndex(activeNoteIndex) {
    this.setState({
      noteIndex: activeNoteIndex
    });
  }


  render () {
    const singleNoteDispay = (activeNote) => {
      return (<Route path={`/note/${activeNote}`} render={() => {
        return <NoteMain activeNote={activeNote} activeNoteIndex={this.state.noteIndex} noteList={this.state.noteList} />
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
                      return <Sidebar folders={this.state.folderList} />
                    }}/>
                <Route 
                    path='/folder' 
                    render={() => {
                      return <FolderSidebar folders={this.state.folderList} />
                    }}
                  />
                <Route path='/note' component={NoteSidebar}/>
              </section>
              <section className="main-right">
                <Route 
                  path='/main' 
                  render={() => {
                    return <MainNotes list={this.state.folderList.notes} />
                  }} />
                <Route path='/folder' component={FolderView} />
                <Route path='/note' component={NoteMain} />
                {singleNoteDispay(this.state.activeNote)}
              </section>
  
          </div>
          
          </main>
      </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
