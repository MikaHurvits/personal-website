import React from 'react';
import { useNavigate } from 'react-router-dom';
import './success.css';

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="success-page">
            <h1>Thank You!</h1>
            <p>Your message has been sent successfully!</p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
};

export default Success;