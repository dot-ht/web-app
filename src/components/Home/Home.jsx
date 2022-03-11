import { useState } from 'react';

import Planet from "../Planet/Planet";

/* const planet = {
  name: 'Earth',
  description: 'Earth is a planet, wow'
}
 */

const Home = (props) => {
  const planets = props.planets;
  const _planet = planets.map((planet) => 
    <Planet item={planet} />
  );

  return (
    <>
      <h1>Home</h1>
      <div>{_planet}</div>
    </>
  );   
}

export default Home;