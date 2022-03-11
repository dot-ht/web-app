import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import Planets from './components/Planet/Planets';
import Navigation from './components/Navigation/Navigation';

import logo from './logo.svg';
import './App.css';

const planets = {
  planets: [
    {
        "planet_name": "Mercury",
        "planet_sub": "Swift Planet",
        "planet_ico": "https://cdn-icons.flaticon.com/png/512/3049/premium/3049528.png?token=exp=1647009253~hmac=88bbee89a38640d0fdb94f762dc9cd47",
        "planet_imgs": [
            "https://cdn.pixabay.com/photo/2013/07/18/10/57/mercury-163610_1280.jpg",
            "https://cdn.pixabay.com/photo/2014/07/01/11/38/planet-381127_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/06/26/18/48/mercury-822825_1280.png",
            "https://www.nasa.gov/sites/default/files/thumbnails/image/pia03101-mariner-10-mercury.png"
        ],
        "planet_info":"Zipping around the sun in only 88 days, Mercury is the closest planet to the sun, and it's also the smallest, only a little bit larger than Earth's moon. Because its so close to the sun (about two-fifths the distance between Earth and the sun), Mercury experiences dramatic changes in its day and night temperatures: Day temperatures can reach a scorching 840  F (450 C), which is hot enough to melt lead. Meanwhile on the night side, temperatures drop to minus 290 F (minus 180 C)."
    },
    {
        "planet_name": "Venus",
        "planet_sub": "Evening Star",
        "planet_ico": "https://cdn-icons-png.flaticon.com/512/3049/3049518.png",
        "planet_imgs": [
            'https://cdn.pixabay.com/photo/2011/12/13/14/39/venus-11022_1280.jpg',
            'https://static.scientificamerican.com/sciam/cache/file/BF78B3E0-98F8-44B7-83773217D9B2141F.jpg',
            'https://media.wired.com/photos/5fd7d0d255d4309f339343b4/master/pass/Sec_Venus_PIA00106.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOtcLX06ZaPIKYYyTNh0ePJK84ThDFQV0xxg&usqp=CAU'
        ],
        "planet_info":"Zipping around the sun in only 88 days, Mercury is the closest planet to the sun, and it's also the smallest, only a little bit larger than Earth's moon. Because its so close to the sun (about two-fifths the distance between Earth and the sun), Mercury experiences dramatic changes in its day and night temperatures: Day temperatures can reach a scorching 840  F (450 C), which is hot enough to melt lead. Meanwhile on the night side, temperatures drop to minus 290 F (minus 180 C)."
    },
    {
        "planet_name": "Earth",
        "planet_sub": "Blue Planet",
        "planet_ico": "https://cdn-icons.flaticon.com/png/512/3049/premium/3049615.png?token=exp=1647009496~hmac=75f7d740ea6369a86316818144d3d177",
        "planet_imgs": [
            'https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_1280.jpg',
            'https://cdn.pixabay.com/photo/2011/12/14/12/11/astronaut-11080_1280.jpg',
            'https://cdn.pixabay.com/photo/2016/01/19/17/29/earth-1149733_1280.jpg',
            'https://cdn.mos.cms.futurecdn.net/VdW4TCfoctFYDSXNSnkoAf-1200-80.jpg'
        ],
        "planet_info":"The third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It's the only world known to harbor life. Earth's atmosphere is rich in nitrogen and oxygen. Earth's surface rotates about its axis at 1,532 feet per second (467 meters per second) — slightly more than 1,000 mph (1,600 kph) — at the equator. The planet zips around the sun at more than 18 miles per second (29 km per second)."
    },
    {
        "planet_name": "The Moon",
        "planet_sub": "Earth's best friend",
        "planet_ico": "https://cdn-icons-png.flaticon.com/512/3049/3049507.png",
        "planet_imgs": [
            'https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg',
            'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/04/mars_landscape/21916769-2-eng-GB/Mars_landscape_pillars.jpg',
            'https://images.news18.com/ibnlive/uploads/2021/09/no-water-on-mars-16323900954x3.png',
            'https://www.openaccessgovernment.org/wp-content/uploads/2021/04/dreamstime_xxl_121672573-scaled.jpg'
        ],
        "planet_info":"The fourth planet from the sun is Mars, and it's a cold, desert-like place covered in dust. This dust is made of iron oxides, giving the planet its iconic red hue. Mars shares similarities with Earth: It is rocky, has mountains, valleys and canyons, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms."
    },
    {
        "planet_name": "Mars",
        "planet_sub": "Red Planet",
        "planet_ico": "https://cdn-icons-png.flaticon.com/512/3049/3049512.png",
        "planet_imgs": [
            'https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg',
            'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/04/mars_landscape/21916769-2-eng-GB/Mars_landscape_pillars.jpg',
            'https://images.news18.com/ibnlive/uploads/2021/09/no-water-on-mars-16323900954x3.png',
            'https://www.openaccessgovernment.org/wp-content/uploads/2021/04/dreamstime_xxl_121672573-scaled.jpg'
        ],
        "planet_info":"The fourth planet from the sun is Mars, and it's a cold, desert-like place covered in dust. This dust is made of iron oxides, giving the planet its iconic red hue. Mars shares similarities with Earth: It is rocky, has mountains, valleys and canyons, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms."
    },
    {
        "planet_name": "Jupiter",
        "planet_sub": "Gas Giant",
        "planet_ico": "https://cdn-icons.flaticon.com/png/512/3049/premium/3049521.png?token=exp=1647009771~hmac=47468b80997c9da721179dd1b5ee8f55",
        "planet_imgs": [
            'https://cdn.mos.cms.futurecdn.net/yyonzpUYYkQNX8corCxeyD.jpeg',
            'http://cdn.spacetelescope.org/archives/images/screen/heic2017a.jpg',
            'https://cdn.vox-cdn.com/thumbor/3hRXvyoAnTO45HJIl1_VloqMNSA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10842939/pia21974.jpg',
            'https://cdn.mos.cms.futurecdn.net/jnBApu9Wyk2maUjzQkuWv7.jpg'
        ],
        "planet_info": "The fifth planet from the sun, Jupiter is a giant gas world that is the most massive planet in our solar system — more than twice as massive as all the other planets combined, according to NASA. Its swirling clouds are colorful due to different types of trace gases. And a major feature in its swirling clouds is the Great Red Spot, a giant storm more than 10,000 miles wide. It has raged at more than 400 mph for the last 150 years, at least. Jupiter has a strong magnetic field, and with 75 moons, it looks a bit like a miniature solar system."
    },
    {
        "planet_name": "Saturn",
        "planet_sub": "Ringed Planet",
        "planet_ico": "https://cdn-icons.flaticon.com/png/512/3049/premium/3049534.png?token=exp=1647010168~hmac=0dd30202371594a60ede7d1994f6ef43",
        "planet_imgs": [
            'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
            'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/03/saturn_at_equinox/19304018-1-eng-GB/Saturn_at_equinox_pillars.jpg',
            'https://www.refinery29.com/images/10414427.jpg?crop=40%3A21',
            'https://starwalk.space/gallery/images/saturn-planet-guide/1920x1080.jpg'
        ],
        "planet_info": "The sixth planet from the sun, Saturn is known most for its rings. When polymath Galileo Galilei first studied Saturn in the early 1600s, he thought it was an object with three parts: a planet and two large moons on either side. Not knowing he was seeing a planet with rings, the stumped astronomer entered a small drawing — a symbol with one large circle and two smaller ones — in his notebook, as a noun in a sentence describing his discovery. More than 40 years later, Christiaan Huygens proposed that they were rings. The rings are made of ice and rock and scientists are not yet sure how they formed. The gaseous planet is mostly hydrogen and helium and has numerous moons."
    },
    {
        "planet_name": "Uranus",
        "planet_sub": "Bulls-eye Planet",
        "planet_ico": "https://cdn-icons.flaticon.com/png/512/3049/premium/3049553.png?token=exp=1647010646~hmac=1dbf240c467267b3ba0c186ee8382467",
        "planet_imgs": [
            'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_1920/v1/media/gmg/2SCUFD6Q4FEDXKP2LIYOWIWVHM.jpg?_a=ATABlAA0',
            'http://www.nasa.gov/sites/default/files/thumbnails/image/pia18182-uranus-voyager1.png',
            'https://preview.redd.it/scrzo1bxrjf41.jpg?auto=webp&s=b9dde2ed1fd5049d478d04f943adb6c04cc6aff6',
        ],
        "planet_info": "The seventh planet from the sun, Uranus is an oddball. It has clouds made of hydrogen sulfide, the same chemical that makes rotten eggs smell so foul. It rotates from east to west like Venus. But unlike Venus or any other planet, its equator is nearly at right angles to its orbit — it basically orbits on its side. Astronomers believe an object twice the size of Earth collided with Uranus roughly 4 billion years ago, causing Uranus to tilt. That tilt causes extreme seasons that last 20-plus years, and the sun beats down on one pole or the other for 84 Earth-years at a time."
    },
    {
        "planet_name": "Neptune",
        "planet_sub": "Bulls-eye Planet",
        "planet_ico": "https://cdn-icons.flaticon.com/png/512/3049/premium/3049553.png?token=exp=1647010646~hmac=1dbf240c467267b3ba0c186ee8382467",
        "planet_imgs": [
            'https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_1920/v1/media/gmg/2SCUFD6Q4FEDXKP2LIYOWIWVHM.jpg?_a=ATABlAA0',
            'http://www.nasa.gov/sites/default/files/thumbnails/image/pia18182-uranus-voyager1.png',
            'https://preview.redd.it/scrzo1bxrjf41.jpg?auto=webp&s=b9dde2ed1fd5049d478d04f943adb6c04cc6aff6',
        ],
        "planet_info": "The seventh planet from the sun, Uranus is an oddball. It has clouds made of hydrogen sulfide, the same chemical that makes rotten eggs smell so foul. It rotates from east to west like Venus. But unlike Venus or any other planet, its equator is nearly at right angles to its orbit — it basically orbits on its side. Astronomers believe an object twice the size of Earth collided with Uranus roughly 4 billion years ago, causing Uranus to tilt. That tilt causes extreme seasons that last 20-plus years, and the sun beats down on one pole or the other for 84 Earth-years at a time."
    },
]
}

const App = () => {
  //const title = "Home";
  return (
    <div className="App min-h-full bg-white dark:bg-slate-900">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="planets" element={<Planets planets={planets.planets}/>} />
      </Routes>
    </div>
  );
}


export default App;
