import React, { Component } from 'react';
import './App.css';
import PhotoCollection from './PhotoCollection'
import instagramResponse from './photos.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to my Photo Gallery
        </header>
        <div className="container">
          <div className="row">
            <PhotoCollection peoplePhotos={instagramResponse} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
