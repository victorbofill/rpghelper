import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Stories.css';

class Story extends PureComponent {
  render() {
    return (
      <h1 className={styles.story}>Story</h1>
    );
  }
}

export default connect(
)(Story);