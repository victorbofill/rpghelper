import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Location extends PureComponent {
  render() {
    return (
      <div>
        <main>
          <h1>Location</h1>
          <p>This is the location section.</p>
        </main>
      </div>
    );
  }
}

export default connect(
)(Location);