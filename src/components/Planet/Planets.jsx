import React, { useState, useEffect } from 'react';

import Planet from "../Planet/Planet";

/* const planet = {
  name: 'Earth',
  description: 'Earth is a planet, wow'
}
 */

const Planets = (props) => {
  const [planets, setPlanets] = useState([]);

  const getData = async (state, json) =>{
    await fetch(json
    ,{
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
        state(myJson.planets)
      });
  }

  useEffect(()=>{
    getData(setPlanets, 'planet_template.json')
  },[]
  )

  const _planet = planets.map((planet) => 
    <Planet item={planet} />
  );

  return (
    <>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 p-4">{_planet}</div>
    </>
  );   
}

export default Planets;