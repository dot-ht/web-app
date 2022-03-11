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
      <div className="grid gap-4 grid-cols-3 grid-rows-3 p-4">{_planet}</div>
    </>
  );   
}

export default Planets;