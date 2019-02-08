import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Header.css';

export default class Header extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    headerChildren: PropTypes.array,
    handleCreateChild: PropTypes.func,
    childrenTypes: PropTypes.array,
  };

  state = {
    containerOrContent: null,
  };

  componentDidMount() {
    const { headerChildren } = this.props;
    this.setState({
      containerOrContent: headerChildren ? 'content' : 'container'
    });
  }

  render() {
    const { path, headerChildren, handleCreateChild, childrenTypes } = this.props;
    const { containerOrContent } = this.state;

    return (
      <header className={styles.header}>
        <ul>
          {containerOrContent === 'container' ?
            <ContainerHeader path={path} headerChildren={headerChildren} handleCreateChild={handleCreateChild} /> :
            <ContentHeader path={path} childrenTypes={childrenTypes} />
          }
        </ul>
      </header>
    );
  }
}

class ContainerHeader extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    headerChildren: PropTypes.array.isRequired,
    handleCreateChild: PropTypes.func.isRequired,
  };

  render() {
    const { path, headerChildren, handleCreateChild } = this.props;

    return (
      <Fragment>
        {headerChildren && headerChildren.map(headerChild => {
          return (<NavLink key={headerChild._id} to={`${path}/${headerChild.url}`}><li >{headerChild.name}</li></NavLink>);
        }
        )}
        <li onClick={handleCreateChild}>+</li>
      </Fragment>
    );
  }
}

class ContentHeader extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    childrenTypes: PropTypes.array.isRequired,
  };
  render() {
    const { path, childrenTypes } = this.props;
    return (
      <Fragment>
        <NavLink to={`${path}/`}><li>Details</li></NavLink>
        {childrenTypes && childrenTypes.map(child => {
          const url = child.toLowerCase();
          return <NavLink key={child} to={`${path}/${url}`}><li>{child}</li></NavLink>;
        })}
      </Fragment>);
  }
}
