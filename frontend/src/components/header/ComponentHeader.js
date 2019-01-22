import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Header.css';

export default class ComponentHeader extends Component {
  static propTypes = {
    childrenTypes: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired
  };

  render() {
    const { childrenTypes, path } = this.props;
    
    return (
      <header className={styles.header}>
        <ul>
          {childrenTypes && childrenTypes.map(child => {
            const url = child.toLowerCase();
            return <NavLink key={child} to={`${path}/${url}`}><li>{child}</li></NavLink>;
          })}
          <NavLink to={`${path}/`}><li>Details</li></NavLink>
          {/* <NavLink to={`${match.path}/edit`}><li>Edit</li></NavLink> */}
        </ul>
      </header>
    );
  }
}
