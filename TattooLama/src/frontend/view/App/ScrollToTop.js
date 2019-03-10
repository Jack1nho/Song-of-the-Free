import React, { Component } from 'react';
import { withRouter } from "react-router";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      window.scrollTo(0, 0);
    }

    componentWillMount(prevProps) {
      window.scrollTo(0, 0);
    }

    componentWillUnmount(prevProps) {
      window.scrollTo(0, 0);
    }
  
    render() {
      return this.props.children;
    }
  }
  
export default withRouter(ScrollToTop);