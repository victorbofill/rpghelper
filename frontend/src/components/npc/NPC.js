import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class NPC extends PureComponent {
  render() {
    return (
      <div>
        <main>
          <h1>NPC</h1>
          <p>This is the NPC section.</p>
        </main>
      </div>
    );
  }
}

export default connect(
)(NPC);