import { Link } from 'react-router-dom';

const Navbar = () => {

    const navBarStyles = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        backgroundColor: '#333'
    };

    const linkStyles = {
        color: 'white',
        textDecoration: 'none',
        padding: '8px 16px',
        transition: 'background-color 0.3s'
    };

    const linkHoverStyles = {
        backgroundColor: '#555'
    };

    return (
        <nav style={navBarStyles}>
            <Link to="/" style={linkStyles} onMouseOver={() => linkStyles.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={() => linkStyles.backgroundColor = null}>Home</Link>
            <Link to="/projects" style={linkStyles} onMouseOver={() => linkStyles.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={() => linkStyles.backgroundColor = null}>Projects</Link>
            <Link to="/contact" style={linkStyles} onMouseOver={() => linkStyles.backgroundColor = linkHoverStyles.backgroundColor} onMouseOut={() => linkStyles.backgroundColor = null}>Contact</Link>
        </nav>
    );
}

export default Navbar;