import React from 'react';

const Portfolio = () => {
    return (
        <div>
        <div className='grid-x'>
        <div className='cell small-6'>
        <div className='card' style={{marginBottom: '50px'}}>
          <div className='card-section'>
            <h4>Dreamscape</h4>
          </div>
          <a href='http://dreamscape-vision-board.herokuapp.com/' target='_blank' rel='noreferrer'><img src={require('https://cdn.screencast.com/uploads/g000302LpSmog9xodiVYDYdJuZJIN/SNGOUT2083.png?sv=2021-08-06&st=2023-04-03T14%3A05%3A56Z&se=2023-04-04T14%3A05%3A56Z&sr=b&sp=r&sig=rZIMyygamx5DdMdDRRJiagwcPNEhEu8jnDjb7m4EdJ8%3D')}
           alt=''/></a>
          <div className='card-section'>
            <p>Note taking app built using Express routes to create, read, and delete notes.</p>
            <a href='https://github.com/Joshvuh/Dreamscape' target='_blank' rel='noreferrer'><i className='fa-brands fa-github'></i> Github Repo</a>
          </div>
        </div>
        </div>
        <div className='cell small-6'>
        <div className='card'>
          <div className='card-section'>
            <h4>ChatterHub</h4>
          </div>
          <a href='https://limitless-stream-42645.herokuapp.com/' target='_blank' rel='noreferrer'><img src={require('../assets/chatterhub.png')}
           alt=''/></a>
          <div className='card-section'>
            <p>ChatterHub is the first full stack web app I helped create, this was my second group project in the <a href='https://bootcamp.charlotte.edu/coding/' target='_blank' rel='noreferrer'>Full Stack Coding Bootcamp</a> I attended. It was built using the MVC pattern, using Express.js and Node.js to create a RESTful API, along with Sequelize to create the database. During this project, I learned a lot about Express routes, MVC, and working as a team on the different problems we ran into.</p>
            <a href='https://github.com/Joshvuh/ChatterHub' target='_blank' rel='noreferrer'><i className='fa-brands fa-github'></i> Github Repo</a>
          </div>
        </div>
        </div>
        <div className='cell small-6'>
        <div className='card'>
          <div className='card-section'>
            <h4>Movie & Beer Roulette</h4>
          </div>
          <a href='https://joshvuh.github.io/Movie-Beer-Roulette/' target='_blank' rel='noreferrer'><img src={require('../assets/firefox_dM6785JOGd.jpg')}
           alt=''/></a>
          <div className='card-section'>
            <p>This app was my first group project, working with my classNamemates in UNC Charlotte's <a href='https://bootcamp.charlotte.edu/coding/' target='_blank' rel='noreferrer'>Full Stack Coding Bootcamp</a> we built Movie & Beer Roulette. Using HTML, CSS, and JavaScript. We used API calls to generate a random movie and beer, we also utilized local storage to allow users to 'like' a movie or beer to save it for later. This app was a lot of fun to work on, while a simple app, the accomplishment felt from seeing things come together was astounding. APIs used: <a href='https://www.themoviedb.org/documentation/api' target='_blank' rel='noreferrer'>The Movie DB</a> and <a href='https://punkapi.com/' target='_blank' rel='noreferrer'>Punk API</a></p>
            <a href='https://github.com/Joshvuh/Movie-Beer-Roulette' target='_blank' rel='noreferrer'><i className='fa-brands fa-github'></i> Github Repo</a>
          </div>
        </div>
        </div>
        <div className='cell small-6'>
        <div className='card' style={{marginBottom: '50px'}}>
          <div className='card-section'>
            <h4>Weather Dashboard</h4>
          </div>
          <a href='https://joshvuh.github.io/Weather-Dashboard/' target='_blank' rel='noreferrer'><img src={require('../assets/weatherapp.png')}
           alt=''/></a>
          <div className='card-section'>
            <p>A simple weather dashboard I built using <a href='https://openweathermap.org/api' target='_blank' rel='noreferrer'> Open Weather API</a> to see the 5 day forecast for the inputted city.</p>
            <a href='https://github.com/Joshvuh/Weather-Dashboard' target='_blank' rel='noreferrer'><i className='fa-brands fa-github'></i> Github Repo</a>
          </div>
        </div>
        </div>
        <div className='cell small-6'>
        <div className='card' style={{marginBottom: '50px'}}>
          <div className='card-section'>
            <h4>Note Taker</h4>
          </div>
          <a href='https://glacial-depths-51775.herokuapp.com/notes' target='_blank' rel='noreferrer'><img src={require('../assets/notetaker.png')}
           alt=''/></a>
          <div className='card-section'>
            <p>Note taking app built using Express routes to create, read, and delete notes.</p>
            <a href='https://github.com/Joshvuh/Note-Taker' target='_blank' rel='noreferrer'><i className='fa-brands fa-github'></i> Github Repo</a>
          </div>
        </div>
        </div>
      </div>
      </div>
    )
};

export default Portfolio;
