import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {LayoutBlank} from 'layouts';
import {URL_HOME} from 'utils/page-url';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <LayoutBlank>
      <div className="card card-login mx-auto mt-5">
        <div className="card-header">Login</div>
        <div className="card-body">
          <div>
            <div className="form-group">
              <div className="form-label-group">
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" />
                <label htmlFor="inputEmail">Email address</label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="required" />
                <label htmlFor="inputPassword">Password</label>
              </div>
            </div>
            <div className="form-group">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="remember-me" />
                  Remember Password
                </label>
              </div>
            </div>
            <Link className="btn btn-primary btn-block" to={URL_HOME()}>Login</Link>
          </div>
          <div className="text-center">
            <Link className="d-block small mt-3" to="/register">Register an Account</Link>
            <Link className="d-block small" to="/forgot-password">Forgot Password?</Link>
          </div>
        </div>
      </div>
      </LayoutBlank>
    );
  }
}
export default Login;
