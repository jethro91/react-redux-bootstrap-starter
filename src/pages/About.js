import React, { Component } from 'react';
import LayoutMain from 'layouts/LayoutMain';
import {URL_HOME, URL_ABOUT} from 'utils/page-url';
import BreadCrumb from 'components/Breadcrumb';

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
          <BreadCrumb listData={this.breadCrumbListData}/>
          <h1>About</h1>
        </div>
      </LayoutMain>
    );
  }
}
export default About;
