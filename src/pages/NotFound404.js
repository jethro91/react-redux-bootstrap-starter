import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import {LayoutBlank} from 'layouts';
import {URL_HOME, URL_NOTFOUND} from 'utils/page-url';

class NotFound404 extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    const { props } = this;
    if (props.location.pathname !== URL_NOTFOUND()) {
      return <Redirect to={URL_NOTFOUND()} />;
    }
    return (
      <LayoutBlank>
        <div className="card card-login mx-auto mt-5">
          <div className="card-header text-center">404</div>
          <div className="card-body">
            <Link to={URL_HOME()} className="btn btn-primary btn-block" >Home</Link>
          </div>
        </div>
        
      </LayoutBlank>
    );
  }
}
export default NotFound404;
