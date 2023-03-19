import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'react-foundation';

const Header = () => {
  return (
  <div class="top-bar">
  <div class="top-bar-left"> <h3 style={{color: 'gray', fontWeight: 'bolder'}}>Joshua Lemmond</h3></div>
  <div class="top-bar-right">
  <ButtonGroup>
    <Link to="React-Portfolio/">
      <Button>About</Button>
    </Link>
    <Link to="React-Portfolio/portfolio"> 
      <Button>Portfolio</Button>
    </Link>
    <Link to="React-Portfolio/resume">
    <Button>Resume</Button>
    </Link>
    <Link to="React-Portfolio/contact">
    <Button>Contact</Button>
    </Link>
  </ButtonGroup>

 </div>
 </div>
);
};

export default Header;