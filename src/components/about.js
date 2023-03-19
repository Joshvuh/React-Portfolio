import React from 'react';

const About = () => {
    return (
    <div> 
    <div className='grid-x align-center align-middle' style={{height: '600px'}}>
    <div className='cell small-6'>
          <div className='card-section'>
          <div className='grid-x'>
                <p className='cell small-8'> Hello! My name is Joshua Lemmond. I am a Full Stack Developer with frontend and backend experience. I am seeking a role that will utilize my current development experience, and will push me to continue learning and broadening my development skills.</p>
                <div className='cell small-4' style={{textAlign: 'right'}}>
                <img className='myImage' src={require('../assets/elany-and-i.JPG')} alt='' />
                </div>
            </div>
            <h3>Technologies I've used</h3>
            <div className='grid-x'>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt=''/> HTML 
            </div>
            <div className='cell small-6'>  
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt=''/> CSS
            </div>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt=''/> Bootstrap
            </div>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original.svg" alt=''/> Foundation
            </div>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=''/> JavaScript
            </div>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt=''/> Node.js
            </div>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt=''/> MySQL
            </div>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt='' /> Sequelize
            </div>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='' />MongoDB
            </div>
            <div className='cell small-6'>
                <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='' /> React
            </div>
            </div>
            </div>
    </div>
    </div>
    </div>
    )
};

export default About;