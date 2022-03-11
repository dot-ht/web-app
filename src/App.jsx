import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Planets from './components/Planet/Planets';
import Navigation from './components/Navigation/Navigation';

import logo from './logo.svg';
import './App.css';

const planets = {
  planets: [{
    name: "Mercury",
    description: "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days, the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.",
    image: "https://www.hyperui.dev/photos/mercury.jpg"
  },
  {
    name: "Venus",
    description: "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites.",
    image: "https://www.hyperui.dev/photos/venus.jpg"
  },
  {
    name: "Earth",
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4.5 billion years ago. Earth's gravity interacts with other objects in space, especially the Sun and the Moon.",
    image: "https://www.hyperui.dev/photos/earth.jpg"
  }]
}

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home planets={planets.planets}/>} />
        <Route path="/planets" element={<Planets planets={planets.planets}/>} />
      </Routes>
    </div>
  );
}


export default App;
