import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Header.css';

export default class Header extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    childrenList: PropTypes.array,
    handleCreateNewChild: PropTypes.func,
  };

  render() {
    const { path, childrenList, handleCreateNewChild } = this.props;

    return (
      <header className={styles.header}>
        <ul>
          {!handleCreateNewChild &&
            <NavLink key={Math.random()} to={`${path}`}>
              <li>Details</li>
            </NavLink>
          }
          {childrenList && childrenList.map(child => {
            const { _id, name, url } = child;
            return (<NavLink
              key={_id}
              to={`${path}/${url}`}>
              <li >{name}</li>
            </NavLink>);
          })}
          {handleCreateNewChild &&
            <li onClick={handleCreateNewChild}>+</li>
          }
        </ul>
      </header>
    );
  }
}
