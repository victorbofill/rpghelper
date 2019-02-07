import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Header.css';

export default class ContainerHeader extends Component {
  static propTypes = {
    headerChildren: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    handleCreateChild: PropTypes.func.isRequired
  };

  render() {
    const { headerChildren, path, handleCreateChild } = this.props;

    return (
      <header className={styles.header}>
        <ul>
          {headerChildren && headerChildren.map(headerChild => {
            return (<NavLink key={headerChild._id} to={`${path}/${headerChild.url}`}><li >{headerChild.name}</li></NavLink>);
          }
          )}
          <li onClick={handleCreateChild}>+</li>
        </ul>
      </header>
    );
  }
}
