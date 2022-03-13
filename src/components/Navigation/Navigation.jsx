import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const Navigation = () => (
    <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto dark:bg-slate-900">
    <Link
        className="inline-flex items-center justify-center w-10 h-10 bg-black rounded-full"
        to="/"
    >
        <img src='dotc.png'/>
    </Link>
        
    <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block"><Link className="px-3 py-2 rounded-lg dark:hover:text-white" to="/"> Home </Link></li>
        <li><Link to="/chat" className="px-3 py-2 rounded-lg dark:hover:text-white">Chat</Link></li>
        <li><Link to="/planets" className="px-3 py-2 rounded-lg dark:hover:text-white">Planets</Link></li>
        <li><Link to="#" className="px-3 py-2 rounded-lg dark:hover:text-white">Settings</Link></li>
        <li><a href="https://github.com/dot-ht/dot-project/blob/main/README.md" className="px-3 py-2 rounded-lg">About us</a></li>
    </ul>
    </nav>
);

/* Navigation.propTypes = {
    title:PropTypes.string.isRequired
} */

export default Navigation;