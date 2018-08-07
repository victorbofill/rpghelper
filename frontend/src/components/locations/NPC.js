import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Locations.css';

class NPC extends PureComponent {
  render() {
    return (
      <div className={styles.NPC}>
        <div className={'stats'}>
          <h1>Stats</h1>
          <p>This is where stats will go.</p>
        </div>

        <div className={'stories'}>
          <h1>Stories</h1>
          <p>This is where stories will go.</p>
        </div>
      </div>
    );
  }
}

export default connect(
)(NPC);