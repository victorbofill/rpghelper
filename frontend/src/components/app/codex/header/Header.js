import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Header.css';

export default class Header extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    parentType: PropTypes.string,
    childrenList: PropTypes.array.isRequired,
    handleCreateNewChild: PropTypes.func,
  };

  render() {
    const { path, parentType, childrenList, handleCreateNewChild } = this.props;

    if(childrenList.length < 1) return <h1>Test</h1>;

    return (
      <header className={styles.header}>
        <ul>
          {childrenList.map(child => {
            const { _id, name } = child;
            return (<NavLink
              key={_id}
              to={`${path}/${child.url || parentType}`}>
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
