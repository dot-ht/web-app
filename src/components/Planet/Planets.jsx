import React, { useState, useEffect } from 'react';

import Planet from "../Planet/Planet";

/* const planet = {
  name: 'Earth',
  description: 'Earth is a planet, wow'
}
 */

const Planets = () => {
  const [planets, setPlanets] = useState([]);

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
    getData(setPlanets, 'http://137.184.227.30:5000/planets/')
  },[]
  )

  const _planet = planets.map((planet) => 
    <Planet item={planet} />
  );

  return (
    <>
      {console.log(planets)}
      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 p-4">{_planet}</div>
    </>
  );   
}

export default Planets;