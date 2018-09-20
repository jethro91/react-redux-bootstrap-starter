import React, { Component } from 'react';
import {LayoutMain} from 'layouts';
import {URL_HOME, URL_ABOUT} from 'utils/page-url';
import {Breadcrumb} from 'components';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.breadCrumbListData = [
      {
        name: 'Home',
        href: URL_HOME(),
      },
      {
        name: 'About',
        href: URL_ABOUT(),
      }
    ];
  }

  render() {
    return (
      <LayoutMain>
        <div className="container-fluid">
          <Breadcrumb listData={this.breadCrumbListData}/>
          <h1>About</h1>
        </div>
      </LayoutMain>
    );
  }
}
export default About;
