import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Colors, ButtonGroup } from 'react-foundation';

const Header = () => {
  return (
  <div class="top-bar">
  <div class="top-bar-left"> Joshua Lemmond</div>
  <div class="top-bar-right">
  <ButtonGroup>
    <Link to="/">
      <Button>About</Button>
    </Link>
    <Link to="/portfolio"> 
      <Button>Portfolio</Button>
    </Link>
    <Link to="/resume">
    <Button>Resume</Button>
    </Link>
    <Link to="/contact">
    <Button>Contact</Button>
    </Link>
  </ButtonGroup>

 </div>
 </div>
);
};

export default Header;