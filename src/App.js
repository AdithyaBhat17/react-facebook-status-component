import React, { Component } from 'react';
import './App.css';
import Post from './Post';
import Like from './Like';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="thumbnail">
          <Post />
          <Like />
        </div>        
      </div>    
    );
  }
}

export default App;
