import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/skills.css';

// frontend logos imports
import html5 from '../images/frontend-logos/HTML5_Shield.png';
import css from '../images/frontend-logos/CSS_Shield.png';
import javascript from '../images/frontend-logos/javascript.png';
import react from '../images/frontend-logos/React-icon.svg.png';
import bootstrap from '../images/frontend-logos/Bootstrap_logo.svg.png';

function Skills() {
    return (
        <div>
            <h2>Skills</h2>
            <div className='frontend'>
                <h4>Front-end Skills</h4>
                <div className='d-flex justify-content-center gap-4 my-3'>
                    <div className='card' style={{ width: '7.5rem', height: 'auto' }}>
                        <div className='card-body'>
                            <img src={html5} alt='HTML5' className='skill-logo'/>
                            <p>HTML5</p>
                        </div>
                    </div>
                    <div className='card' style={{ width: '7.5rem', height: 'auto' }}>
                        <div className='card-body'>
                            <img src={css} alt='CSS' className='skill-logo'/>
                            <p>CSS</p>
                        </div>
                    </div>
                    <div className='card' style={{ width: '7.5rem', height: 'auto' }}>
                        <div className='card-body'>
                            <img src={javascript} alt='Javascript' className='skill-logo'/>
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div className='card' style={{ width: '7.5rem', height: 'auto' }}>
                        <div className='card-body'>
                            <img src={react} alt='React' className='skill-logo'/>
                            <p>React</p>
                        </div>
                    </div>
                    <div className='card' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body'>
                            <img src={bootstrap} alt='Bootstrap' className='skill-logo'/>
                            <p>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='backend'>
                <h4>Back-end Skills</h4>
            </div>
            <div className='other'>
                <h4>Other Skills</h4>
            </div>
        </div>
    );
}

export default Skills;
