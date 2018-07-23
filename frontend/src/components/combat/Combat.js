import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Combat extends PureComponent {
  render() {
    return (
      <div>
        <main>
          <h1>Combat</h1>
          <p>This is the combat section.</p>
        </main>
      </div>
    );
  }
}

export default connect(
)(Combat);