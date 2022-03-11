import { useState } from 'react';

import Planet from "../Planet/Planet";

/* const planet = {
  name: 'Earth',
  description: 'Earth is a planet, wow'
}
 */

const Planets = (props) => {
  const planets = props.planets;
  const _planet = planets.map((planet) => 
    <Planet item={planet} />
  );

  return (
    <>
      <h1>Planet</h1>
      <div>{_planet}</div>
    </>
  );   
}

export default Planets;