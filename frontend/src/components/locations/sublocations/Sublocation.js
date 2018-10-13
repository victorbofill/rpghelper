import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { delSublocation } from '../../../services/api';

import styles from './Sublocations.css';

class Sublocation extends PureComponent {
  static propTypes = {
    sublocation: PropTypes.object,
    locationObject: PropTypes.object
  };

  handleDeleteSublocation = () => {
    const { _id } = this.props.locationObject;
    const { _id: sublocationId } = this.props.sublocation;

    delSublocation(_id, sublocationId);
  };

  render() {
    const { name, description } = this.props.sublocation;
    const { handleDeleteSublocation } = this;

    return (
      <div>
        <h3 onClick={handleDeleteSublocation}>-</h3>
        <h1 className={styles.sublocation}>{name}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default connect(
)(Sublocation);