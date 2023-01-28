import React from 'react';
import './Homepage.css';
import therapy1 from '../therapy_pics/therapy1.jpeg';
import therapy2 from '../therapy_pics/therapy2.jpeg';
import therapy3 from '../therapy_pics/therapy3.jpeg';
import therapy4 from '../therapy_pics/therapy4.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="Homepage">
            <div className="Banner">
            <span className="BannerText">
                <h1>Welcome to EmpathTherapy</h1>
                <p>Find a therapist who understands you</p>
                <Link to="/selection">
                  <button>Get Started</button>
                </Link>
            </span>
            <img className="HeroImage" src={therapy1} alt="Therapy Session" />
            <img className="HeroImage" src={therapy2} alt="Therapy Session" />
            <img className="HeroImage" src={therapy3} alt="Therapy Session"/>
            <img className="HeroImage" src={therapy4} alt="Therapy Session" />
            </div>
        </div>
    );
}
export default HomePage;