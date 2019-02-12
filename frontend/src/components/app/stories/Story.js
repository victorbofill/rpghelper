import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

// import Chapters from './chapters/Chapters';

class Region extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    story: PropTypes.object.isRequired,
  };

  render() {
    const { story } = this.props;
    const { path } = this.props.match;
    
    if(!story) return null;

    const { _id } = story;

    return (
      <Router>
        <p>Story</p>
      </Router>
    );
  }
}

export default withRouter(Region);
