import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Entries.css';

class Entry extends PureComponent {
  static propTypes = {
    entry: PropTypes.any,
    handleDelete: PropTypes.func
  };

  render() {
    const { entry, _id } = this.props.entry;

    return (
      <div className={styles.entry}>
        <div className="header">
          <h3>Entry</h3>
          <button onClick={() => this.props.handleDelete(_id)}>X</button>
        </div>
        <p>{entry}</p>
      </div>
    );
  }
}

export default connect(
)(Entry);