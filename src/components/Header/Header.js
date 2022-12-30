import { NavLink } from 'react-router-dom';
import './Header.scss'
import * as FontAwesomeIcons from 'react-icons/fa'
import React from 'react';

const Header = () => {
  const logo = React.createElement(FontAwesomeIcons["FaCameraRetro"])
  return ( 
    <header>
      <div className="logo">
        <i>{logo}</i>
        <p className="logo-text">Garage Image</p>
      </div>
      <ul className='tabs'>
        <li>
          <NavLink to="/">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            How it works
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
 
export default Header;