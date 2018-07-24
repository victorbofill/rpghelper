import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Location extends PureComponent {
  render() {
    return (
      <div>
        <h1>Location</h1>
        <p>This is the location section.</p>
      </div>
    );
  }
}

export default connect(
)(Location);