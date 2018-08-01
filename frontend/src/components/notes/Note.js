import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Notes.css';

class Note extends PureComponent {
  static propTypes = {
    note: PropTypes.any,
    handleDelete: PropTypes.func
  };

  render() {
    const { note, _id } = this.props.note;

    return (
      <div className={styles.note}>
        <h3>Note</h3>
        <p>{note}</p>
        <button onClick={() => this.props.handleDelete(_id)}>X</button>
      </div>
    );
  }
}

export default connect(
)(Note);