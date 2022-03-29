import React from 'react';
import { Routes, Route } from "react-router-dom";


import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import Planets from './components/Planet/Planets';
import Navigation from './components/Navigation/Navigation';

import './App.css';

const App = () => {
  return (
    <div className="App flex flex-col h-full max-h-screen bg-neutral-100 dark:bg-slate-900">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </div>
  );
}


export default App;
