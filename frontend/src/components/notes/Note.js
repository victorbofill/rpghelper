import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Notes.css';

class Note extends PureComponent {
  render() {
    return (
      <div className={styles.note}>
        <h3>Note</h3>
        <p>This is a note.</p>
      </div>
    );
  }
}

export default connect(
)(Note);