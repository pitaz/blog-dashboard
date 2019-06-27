import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss';

const Navbar = () => (
  <div className="nav">
    <div className="nav-left">
    <FontAwesomeIcon icon={faBars} className="menu-icon"/>
      <a href="!#" className="logo">Dashboard</a>
    </div>
    <div className="nav-right">
    <FontAwesomeIcon icon={faUser} className="menu-icon"/>
    </div>
  </div>
);

export default Navbar;
