import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EditBase from './EditBase';
import Assets from '../assets/Assets';
import NPCs from '../NPCs/NPCs';

import styles from './Bases.css';

class Base extends Component {
  static propTypes = {
    child: PropTypes.object,
    match: PropTypes.object
  };

  render() {
    const { child, match } = this.props;

    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to={`${match.path}/assets`}><li>Assets</li></NavLink>
              <NavLink to={`${match.path}/npcs`}><li>NPCs</li></NavLink>
              <NavLink to={`${match.path}`}><li>Details</li></NavLink>
              <NavLink to={`${match.path}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route path={`${match.path}/assets`} render={props => <Assets { ...props } base={child} />}/>
              <Route path={`${match.path}/npcs`} render={props => <NPCs { ...props } base={child} />}/>
              <Route exact path={`${match.path}`} render={props => <BaseDetails base={child} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditBase base={child} {...props} />}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Base));

class BaseDetails extends Component {
  static propTypes = {
    base: PropTypes.object.isRequired
  };

  render() {
    const { name, description } = this.props.base;

    return (
      <Fragment>
        <h1>{name}</h1>
        <p>{description}</p>
      </Fragment>
    );
  }
}
