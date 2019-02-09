import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Header.css';

export default class Header extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    containers: PropTypes.array,
    handleCreateContainer: PropTypes.func,
    contentTypes: PropTypes.array,
  };

  state = {
    containerOrContent: null,
  };

  componentDidMount() {
    const { handleCreateContainer } = this.props;
    this.setState({
      containerOrContent: handleCreateContainer ? 'container' : 'content'
    });
  }

  render() {
    const { path, containers, handleCreateContainer, contentTypes } = this.props;
    const { containerOrContent } = this.state;

    return (
      <header className={styles.header}>
        <ul>
          {containerOrContent === 'container' && <ContainerHeader path={path} containers={containers} handleCreateContainer={handleCreateContainer} />}
          {containerOrContent === 'content' && <ContentHeader path={path} contentTypes={contentTypes} />}
        </ul>
      </header>
    );
  }
}

class ContainerHeader extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    containers: PropTypes.array.isRequired,
    handleCreateContainer: PropTypes.func.isRequired,
  };

  render() {
    const { path, containers, handleCreateContainer } = this.props;

    return (
      <Fragment>
        {containers && containers.map(headerChild => {
          return (<NavLink key={headerChild._id} to={`${path}/${headerChild.url}`}><li >{headerChild.name}</li></NavLink>);
        }
        )}
        <li onClick={handleCreateContainer}>+</li>
      </Fragment>
    );
  }
}

class ContentHeader extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    contentTypes: PropTypes.array.isRequired,
  };
  render() {
    const { path, contentTypes } = this.props;
    return (
      <Fragment>
        <NavLink to={`${path}/`}><li>Details</li></NavLink>
        {contentTypes && contentTypes.map(type => {
          const url = type.toLowerCase();
          return <NavLink key={Math.random()} to={`${path}/${url}`}><li>{type}</li></NavLink>;
        })}
      </Fragment>);
  }
}
