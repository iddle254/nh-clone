import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav1 from './components/Nav/Nav1';
// import Nav2 from './components/Nav/Nav2';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className='App'>
      <Nav1 />
      {/* <Nav2 /> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
