import React, { lazy, Suspense } from 'react';
import './App.css';
import { Spinner } from 'react-bootstrap';

// const FetchingPosts = lazy(() => import('./components/FetchingPosts'));
// const FetchingPhotos = lazy(() => import('./components/FetchingPhotos'));
const FetchingUsers = lazy(() => import('./components/FetchingUsers'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner animation="grow" />}>
        {/* <FetchingPosts />
        <FetchingPhotos /> */}
        <FetchingUsers />
      </Suspense>
    </div>
  );
}

export default App;
