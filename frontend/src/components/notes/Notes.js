import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Notes extends PureComponent {
  render() {
    return (
      <div>
        <main>
          <h1>Notes</h1>
          <p>This is the notes section.</p>
        </main>
      </div>
    );
  }
}

export default connect(
)(Notes);