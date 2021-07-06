import React from 'react';
import './App.css';
import FetchingPosts from './components/FetchingPosts';
import FetchingUsers from './components/FetchingUsers';
import FetchingPhotos from './components/FetchingPhotos';

function App() {
  return (
    <div className="App">
      React Api Usage
      <FetchingPosts />
      <FetchingUsers />
      <FetchingPhotos />
    </div>
  );
}

export default App;
