import './LearnMore.css';
import { FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LearnMore = () => {
    const navigate = useNavigate();
    return (  
        <div className="learn-more">
            <h2>Learn more about me</h2>
            <div className='learn-more-buttons' >
            {/* <button> <FaUser className="button-icon" /> about me</button>
                <button><FaCode className="button-icon" /> my work</button>
                <button><FaEnvelope className="button-icon" /> contact me</button> */}
                <button className="button-icon" onClick={() => navigate('/about')}> about me </button>
                {/* <button className="button-icon"> my work </button> */}
                <button className="button-icon" onClick={() => navigate('/contact')}> contact me</button>
            
            </div>
        </div>
    );
}
 
export default LearnMore;