import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Notes.css';

class Note extends PureComponent {
  static propTypes = {
    note: PropTypes.any
  };

  render() {
    const { note } = this.props.note;

    return (
      <div className={styles.note}>
        <h3>Note</h3>
        <p>{note}</p>
      </div>
    );
  }
}

export default connect(
)(Note);