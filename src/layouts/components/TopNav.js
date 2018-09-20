import React from 'react';
import {Link} from 'react-router-dom';
import {URL_LOGIN} from 'utils/page-url';

const Main = () => (
  <React.Fragment>
    <a className="navbar-brand mr-1" href="index.html">Start Bootstrap</a>

    <div className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">

    </div>
    <ul className="navbar-nav ml-auto ml-md-0">
      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user-circle fa-fw"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <Link className="dropdown-item" to="/profile">Profile</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to={URL_LOGIN()}>Logout</Link>
        </div>
      </li>
    </ul>
  </React.Fragment>
);

export default Main;
