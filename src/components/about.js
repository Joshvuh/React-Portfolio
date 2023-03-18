import React from 'react';

const About = () => {
    return (
    <div> 
    <div className='grid-x align-center' style={{height: '5000'}}>
    <div className='cell small-6'>
        <div className='card'>
          <div className='card-section'>
              <p>Hello! My name is Joshua Lemmond. I am a Full Stack Developer with frontend and backend experience. I am seeking a role that will utilize my current development experience, and will push me to continue learning and broadening my development skills. </p>
              <h3>Technologies I've used</h3>
              <ul className="bulletedList">
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt=''/> HTML
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt=''/> CSS
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt=''/> Bootstrap
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/foundation/foundation-original.svg" alt=''/> Foundation
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=''/> JavaScript
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt=''/> Node.js
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt=''/> MySQL
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt='' /> Sequelize
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='' />MongoDB
                 <img width={25} height={25} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='' /> React
              </ul>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
};

export default About;