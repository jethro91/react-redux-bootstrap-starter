import React, { Component } from 'react'


class LayoutBlank extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  componentDidMount(){
    window.document.body.removeAttribute('id')
    window.document.body.removeAttribute('data-gr-c-s-loaded');
    window.document.className = 'bg-dark';
  }
  render() {
    const {props} = this;
    return (
      <div className="container">
        {props.children}
      </div>
    );
  }
}

export default LayoutBlank