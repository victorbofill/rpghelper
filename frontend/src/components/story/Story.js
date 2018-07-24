import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Story extends PureComponent {
  render() {
    return (
      <div>
        <h1>Story</h1>
        <p>This is the story section.</p>
      </div>
    );
  }
}

export default connect(
)(Story);