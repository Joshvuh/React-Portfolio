import React from 'react';
import { Button } from 'react-foundation';
import MyResume from '../assets/Joshua-Lemmond-Resume.pdf';

const Resume = () => {
    return (
        <div>
        <div className='grid-x align-center align-middle' style={{height: '600px'}}>
        <div className='cell small-6'>
            <div className='grid-x align-center align-middle'>
            <a href={MyResume} download="Joshua-Lemmond-Resume"><Button className='resume' style={{height: '300px', width: '500px', backgroundColor: 'gray'}}><h3>Click here to download my Resume</h3></Button></a>
            </div>
        </div>
        </div>
      </div>
    )
};

export default Resume;