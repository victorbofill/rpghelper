import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EditLocation from './EditLocation';
import Bases from '../bases/Bases';

import styles from './Locations.css';

class Location extends Component {
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
              <NavLink to={`${match.path}/bases`}> <li>Bases</li></NavLink>
              <NavLink to={`${match.path}`}><li>Details</li></NavLink>
              <NavLink to={`${match.path}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route path={`${match.path}/bases`} render={props => <Bases { ...props } locationObject={child} />}/>
              <Route exact path={`${match.path}`} render={props => <LocationDetails locationObject={child} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditLocation locationObject={child} {...props} />}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Location));

class LocationDetails extends Component {
  static propTypes = {
    locationObject: PropTypes.object.isRequired
  };

  render() {
    const { name, description } = this.props.locationObject;

    return (
      <Fragment>
        <h1>{name}</h1>
        <p>{description}</p>
      </Fragment>
    );
  }
}
