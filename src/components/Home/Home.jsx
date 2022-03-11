import { Link } from "react-router-dom";

import Planet from "../Planet/Planet";

/* const planet = {
  name: 'Earth',
  description: 'Earth is a planet, wow'
}
 */

const Home = () => {
  return (
    <div className="flex center h-full">
      <Link to="/chat" className="py-2 px-4 w-1/5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Start Chat
      </Link>
    </div>
  );   
}

export default Home;