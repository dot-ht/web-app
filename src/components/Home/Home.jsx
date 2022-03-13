import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  const [day, setDay] = useState({});

  const getData = async (state, json) =>{
    await fetch(json
    ,{
      'methods':'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        //console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        //console.log(myJson);
        state(myJson)
      });
  }

  useEffect(()=>{
    getData(setDay, 'http://137.184.227.30:5000/day/')
  },[]
  )

  // Tva e naj maloumnoto neshto nqkoga, ama kot tolko

  return (
    
    <div className="fixed w-screen h-screen bg-slate-900 ">
        <img
        style={{
          'filter': 'blur(5px)',
          '-webkit-filter': 'blur(5px)'
        }}
        className="absolute h-screen cover w-full opacity-50"
        src={day.hdurl}
        alt=""
      ></img>
      <div /* style={{"backgroundImage": "url(" + day.hdurl + ")"}} */ className="shit flex justify-center items-center fixed w-screen h-screen">
        <Link to="/chat" className="py-2 px-4 m-auto w-1/5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          Start Chat
        </Link>
      </div>  
    </div>
  )
}
export default Home;