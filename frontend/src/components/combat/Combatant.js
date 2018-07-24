import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Combatant extends PureComponent {
  render() {
    return (
      <div>
        <h3>Combatant</h3>
        <p>This is a combatant.</p>
      </div>
    );
  }
}

export default connect(
)(Combatant);