import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/skills.css';

// frontend logos imports
import html5 from '../images/frontend-logos/HTML5_Shield.png';
import css from '../images/frontend-logos/CSS_Shield.png';
import javascript from '../images/frontend-logos/javascript.png';
import react from '../images/frontend-logos/React-icon.svg.png';
import bootstrap from '../images/frontend-logos/Bootstrap_logo.svg.png';

//backend logos imports
import python from '../images/backend-logos/pythoned.png';
import c from '../images/backend-logos/ISO_C++_Logo.png';
import cSharp from '../images/backend-logos/C_Sharp_Logo_2023.png';
import java from '../images/backend-logos/Java_programming_language_logo.png';
import postgre from '../images/backend-logos/Postgresql_elephant.png';
import node from '../images/backend-logos/nodejs.png';

//other logos imports
import git from '../images/other-logos/18133.png';
import unity from '../images/other-logos/unity.png';
import unreal from '../images/other-logos/unreal.png';
import linux from '../images/other-logos/linux.png';


function Skills() {
    return (
        <div className='section' id='skills'>
            <h2>Skills</h2>
            <div className='frontend mt-4'>
                <h4>Front-end</h4>
                <div className='d-flex justify-content-center gap-4 my-3'>
                    <div className='card bg-dark' style={{ width: '7.5rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={html5} alt='HTML5' className='skill-logo' />
                            <p className='mt-2'>HTML5</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '7.5rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={css} alt='CSS' className='skill-logo' />
                            <p className='mt-2'>CSS</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '7.5rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={javascript} alt='Javascript' className='skill-logo' />
                            <p className='mt-2'>Javascript</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '7.5rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={react} alt='React' className='skill-logo' />
                            <p className='mt-2'>React</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={bootstrap} alt='Bootstrap' className='skill-logo' />
                            <p className='mt-2'>Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='backend mt-4'>
                <h4>Back-end</h4>
                <div className='d-flex justify-content-center gap-4 my-3'>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={python} alt='Python' className='skill-logo' />
                            <p className='mt-2'>Python</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={c} alt='C/C++' className='skill-logo' />
                            <p className='mt-2'>C/C++</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={cSharp} alt='C#' className='skill-logo' />
                            <p className='mt-2'>C#</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={java} alt='Java' className='skill-logo' />
                            <p className='mt-2'>Java</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={postgre} alt='PostgreSQL' className='skill-logo' />
                            <p className='mt-2'>PostgreSQL</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={node} alt='NodeJS' className='skill-logo' />
                            <p className='mt-2'>NodeJS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='other mt-4'>
                <h4>Other</h4>
                <div className='d-flex justify-content-center gap-4 my-3'>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={git} alt='Git' className='skill-logo' />
                            <p className='mt-2'>Git</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={unity} alt='Unity Engine' className='skill-logo' />
                            <p className='mt-2'>Unity Engine</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={unreal} alt='Unreal Engine' className='skill-logo' />
                            <p className='mt-2'>Unreal Engine</p>
                        </div>
                    </div>
                    <div className='card bg-dark' style={{ width: '8rem', height: 'auto' }}>
                        <div className='card-body p-0 pt-3'>
                            <img src={linux} alt='Linux' className='skill-logo' />
                            <p className='mt-2'>Linux</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
