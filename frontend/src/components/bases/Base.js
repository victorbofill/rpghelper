import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import EditBase from './EditBase';
import Assets from '../assets/Assets';
import NPCs from '../NPCs/NPCs';

import styles from './Bases.css';

class Base extends PureComponent {
  static propTypes = {
    base: PropTypes.object,
    match: PropTypes.object
  };

  render() {
    const { base, match } = this.props;

    if(!base) return null;

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
              <Route path={`${match.path}/assets`} render={props => <Assets { ...props } base={base} />}/>
              <Route path={`${match.path}/npcs`} render={props => <NPCs { ...props } base={base} />}/>
              <Route exact path={`${match.path}`} render={props => <BaseDetails base={base} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditBase base={base} {...props} />}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(Base);

class BaseDetails extends PureComponent {
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
