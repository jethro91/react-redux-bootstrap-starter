import React, { Component } from 'react'
import {TopNav, SidebarNav, MainFooter} from './components';


class LayoutMain extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  componentDidMount(){
    window.document.body.id ='page-top';
  }
  render() {
    const {props} = this;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <TopNav />
        </nav>
        <div id="wrapper">
          <SidebarNav />
          <div id="content-wrapper">
            {props.children}
          </div>
        </div>
        <footer className="sticky-footer">
          <MainFooter />
        </footer>
        {/*
        <script src={`${process.env.PUBLIC_URL}/vendor/jquery/jquery.min.js`}></script>
        <script src={`${process.env.PUBLIC_URL}/vendor/bootstrap/js/bootstrap.bundle.min.js`}></script>
        <script src={`${process.env.PUBLIC_URL}/vendor/jquery-easing/jquery.easing.min.js`}></script>
        */}
        <script src={`${process.env.PUBLIC_URL}/vendor/chart.js/Chart.min.js`}></script>
        <script src={`${process.env.PUBLIC_URL}/vendor/datatables/jquery.dataTables.js`}></script>
        <script src={`${process.env.PUBLIC_URL}/vendor/datatables/dataTables.bootstrap4.js`}></script>
     
        <script src={`${process.env.PUBLIC_URL}/js/sb-admin.min.js`}></script>
        <script src={`${process.env.PUBLIC_URL}/js/demo/datatables-demo.js`}></script>
        <script src={`${process.env.PUBLIC_URL}/js/demo/chart-area-demo.js`}></script>
     
      </React.Fragment>
    );
  }
}

export default LayoutMain