import React from 'react';
import './style.css';
import logo from '../../assets/img/soulhaven.png';

const Loader = ({ logoVisible = true }) => (
  <div className="loader-overlay">
    <div className="loader-content">
      <img src={logo} alt="soulhaven" className={`loader-logo${logoVisible ? ' visible' : ' hidden'}`} />
      <div className="wave-container">
                    <svg className="wave-svg wave1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M227.681 42.9066C144.667 -26.626 41.8657 13.9347 0.841553 42.9066V185H1494.05H1801.51V42.9066C1724.2 -9.56225 1584.06 -17.3847 1475.34 42.9066C1388.36 91.1396 1259.25 63.0037 1205.57 42.9066C1094.21 -16.7339 993.098 18.0564 956.462 42.9066C900.958 69.4302 768.233 106.563 681.359 42.9066C594.484 -20.75 490.717 16.383 449.693 42.9066C410.278 71.8785 310.694 112.439 227.681 42.9066Z" fill="#AAE6FF" fill-opacity="0.4"/>
                    </svg>
                    <svg className="wave-svg wave2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M227.681 42.9066C144.667 -26.626 41.8657 13.9347 0.841553 42.9066V185H1494.05H1801.51V42.9066C1724.2 -9.56225 1584.06 -17.3847 1475.34 42.9066C1388.36 91.1396 1259.25 63.0037 1205.57 42.9066C1094.21 -16.7339 993.098 18.0564 956.462 42.9066C900.958 69.4302 768.233 106.563 681.359 42.9066C594.484 -20.75 490.717 16.383 449.693 42.9066C410.278 71.8785 310.694 112.439 227.681 42.9066Z" fill="#AAE6FF" fill-opacity="0.4"/>
                    </svg>

                    <svg className="wave-svg wave3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M227.681 42.9066C144.667 -26.626 41.8657 13.9347 0.841553 42.9066V185H1494.05H1801.51V42.9066C1724.2 -9.56225 1584.06 -17.3847 1475.34 42.9066C1388.36 91.1396 1259.25 63.0037 1205.57 42.9066C1094.21 -16.7339 993.098 18.0564 956.462 42.9066C900.958 69.4302 768.233 106.563 681.359 42.9066C594.484 -20.75 490.717 16.383 449.693 42.9066C410.278 71.8785 310.694 112.439 227.681 42.9066Z" fill="#AAE6FF" fill-opacity="0.4"/>
                    </svg>

                  
                </div>
    </div>
  </div>
);

export default Loader; 