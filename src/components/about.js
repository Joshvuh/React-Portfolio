import React from 'react';

const About = () => {
    return (
            <div className="d-flex justify-content-center flex-column flex-sm-row">
                <h3>About Me</h3>
              <p>I am a Full Stack Developer with frontend and backend experience. I am seeking a role that will utilize my current development experience, and will push me to continue learning and broadening my development skills. </p>
              <h3>Skills</h3>
              <ul className="bulletedList">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Foundation</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
              </ul>
              <h3>My Links</h3>
              <ul className="vertical menu">
                <li><a href="mailto:joshualemmond@gmail.com" target="_blank" rel="noreferrer"><i className="fi-list fa-solid fa-envelope"></i> Email</a></li>
                <li><a href="https://github.com/Joshvuh" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Github</a></li>
                <li><a href="https://www.linkedin.com/in/joshualemmond/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
              </ul>
              </div>
    )
};

export default About;