import React from 'react';
import {NavLink} from 'react-router-dom';
import {URL_HOME, URL_ABOUT} from 'utils/page-url';

const SidebarNav = () => (
  <ul className="sidebar navbar-nav">
    <li className="nav-item">
      <NavLink to={URL_HOME()} exact={true} className="nav-link" activeStyle={{color: '#fff'}}>
        <i className="fas fa-fw fa-tachometer-alt" />
        <span>Home</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to={URL_ABOUT()} className="nav-link" activeStyle={{color: '#fff'}}>
        <i className="fas fa-fw fa-table" />
        <span>About</span>
      </NavLink>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-fw fa-folder" />
        <span>Pages</span>
      </a>
      <div className="dropdown-menu" aria-labelledby="pagesDropdown">
        <h6 className="dropdown-header">Login Screens:</h6>
        <a className="dropdown-item" href="login.html">Login</a>
        <a className="dropdown-item" href="register.html">Register</a>
        <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
        <div className="dropdown-divider" />
        <h6 className="dropdown-header">Other Pages:</h6>
        <a className="dropdown-item" href="404.html">404 Page</a>
        <a className="dropdown-item" href="blank.html">Blank Page</a>
      </div>
    </li>
    <li className="nav-item">
      <NavLink to="/charts" className="nav-link">
        <i className="fas fa-fw fa-chart-area" />
        <span>Charts</span>

      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/tables" className="nav-link" >
        <i className="fas fa-fw fa-table" />
        <span>Tables</span>

      </NavLink>
    </li>
  </ul>
);

export default SidebarNav;
