import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Sublocations.css';

class Sublocation extends PureComponent {
  render() {
    return (
      <h1 className={styles.sublocation}>Sublocation</h1>
    );
  }
}

export default connect(
)(Sublocation);