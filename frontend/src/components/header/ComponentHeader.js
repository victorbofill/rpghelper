import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import styles from './Header.css';

class ComponentHeader extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
    childType: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
  };

  render() {
    const { child, childType, location } = this.props;

    console.log('location: ', location);

    return (
      <header className={styles.header}>
        <ul>
          <NavLink to={`/regions/${child.url}/subregions`}><li>{childType}</li></NavLink>
          {/* <NavLink to={`/regions/${child.url}/`}><li>Details</li></NavLink> */}
          {/* <NavLink to={`/regions/${child.url}/edit`}><li>Edit</li></NavLink> */}
        </ul>
      </header>
    );
  }
}

export default withRouter(ComponentHeader);