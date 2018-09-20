import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutMain from 'layouts/LayoutMain';
import BreadCrumb from 'components/Breadcrumb';
import { simpleAction } from 'reduxs/simple';
import { URL_HOME } from 'utils/page-url';


const mapStateToProps = state => {
  console.log(state);
  return {
    ...state,
  simpleReducer: state.simple,
  };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.breadCrumbListData = [
      {
        name: 'Home',
        href: URL_HOME(),
      }
    ];
  }

  render() {
    const { props } = this;
    return (
      <LayoutMain>
        <div className="container-fluid">
          <BreadCrumb listData={this.breadCrumbListData} />
          <button type="button" onClick={() => { props.simpleAction(); }}>Test redux action</button>
          <pre>
            {
              JSON.stringify(props.simpleReducer)
            }
          </pre>
        </div>
      </LayoutMain>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
