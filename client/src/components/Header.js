import './Header.css';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate(); 

    return (
        <div className="header">
            {/* <img className="logo" src={logo}/> */}
            <img 
                src={logo} 
                className="logo"
                alt="logo" 
                onClick={() => navigate('/')}
                style={{ cursor: 'pointer' }} // Optional: shows clickable cursor
            />
            <span className="header-links">            
                <Link to="/about">About</Link>
                {/* <Link to="/projects">Projects</Link> */}
                <Link to="/contact">Contact</Link>
            </span>
        </div>    
    );
}
 
export default Header;
