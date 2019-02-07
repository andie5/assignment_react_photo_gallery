import React, { Component } from 'react';
import './App.css';
import PhotoCollection from './PhotoCollection'
import instagramResponse from './photos.js'
// const instagramResponse = require('./photos');

class App extends Component {
  render() {
    console.log("instagramResp", instagramResponse)
    console.log("instaa1", instagramResponse['data'])
    return (
      <div className="App">
        <header className="App-header">
          Welcome to my Photo Gallery
        </header>
        <div className="container">
          <div className="row">
            <div className="col-sm">
            
              <PhotoCollection peoplePhotos={instagramResponse} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
