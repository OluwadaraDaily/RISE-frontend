import { Link, NavLink } from 'react-router-dom';
import './Header.scss'
import * as FontAwesomeIcons from 'react-icons/fa'
import React from 'react';

const Header = () => {
  const logo = React.createElement(FontAwesomeIcons["FaCameraRetro"])
  return ( 
    <header>
      <div className="logo">
        <Link to="/">
          <p className="logo-text">Garage Image</p>
          <i>{logo}</i>
        </Link>
      </div>
      <ul className='tabs'>
        <li>
          <NavLink to="about-us">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="settings">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="how-it-works">
            How it works
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
 
export default Header;