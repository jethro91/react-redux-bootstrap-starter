import React, { Component } from 'react';
import {LayoutMain} from 'layouts';
import {URL_HOME, URL_PROFILE} from 'utils/page-url';
import {Breadcrumb} from 'components';


class Profile extends Component {
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
        name: 'Profile',
        href: URL_PROFILE(),
      }
    ];
  }

  render() {
    return (
      <LayoutMain>
        <div className="container-fluid">
          <Breadcrumb listData={this.BreadCrumbListData} />
          <h1>Profile</h1>
        </div>
      </LayoutMain>
    );
  }
}
export default Profile;
