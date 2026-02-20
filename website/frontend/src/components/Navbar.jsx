import { NavLink } from 'react-router-dom';
import LiltStackLogo from './LiltStackLogo';

const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <LiltStackLogo />
                </NavLink>
            </div>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
