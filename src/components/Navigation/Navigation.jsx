import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const Navigation = () => (
    <nav className="flex items-center justify-between max-w-3xl p-4 mx-auto dark:bg-slate-900">
    <Link
        className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg"
        to="/"
    ></Link>
        
    <ul className="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
        <Link className="px-3 py-2 rounded-lg" to="/"> Home </Link>
        </li>
        <li><Link to="/chat" className="px-3 py-2 rounded-lg">Chat</Link></li>
        <li><Link to="/planets" className="px-3 py-2 rounded-lg">Planets</Link></li>
        <li><Link to="/planets" className="px-3 py-2 rounded-lg">Settings</Link></li>
        <li><Link to="/planets" className="px-3 py-2 rounded-lg">About us</Link></li>
    </ul>
    </nav>
);

/* Navigation.propTypes = {
    title:PropTypes.string.isRequired
} */

export default Navigation;