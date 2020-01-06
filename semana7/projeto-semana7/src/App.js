import React from 'react';
import './App.css';
import AddPlaylist from './components/AddPlaylist/index';
import GetPlaylist from './components/Playlist/index';

function App() {
  return (
    <div className="App">
     
      <AddPlaylist/>
      <GetPlaylist/>

    </div>
  );
}

export default App;
