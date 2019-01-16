import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import EditSubregion from './EditSubregion';
import Locations from '../locations/Locations';

import styles from './Subregions.css';

class Subregion extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
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
              <NavLink to={`${match.path}/locations`}><li>Locations</li></NavLink>
              <NavLink to={`${match.path}`}><li>Details</li></NavLink>
              <NavLink to={`${match.path}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route path={`${match.path}/locations`} component={Locations}/>
              <Route exact path={`${match.path}`} render={props => <SubregionDetails subregion={child} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditSubregion subregion={child} {...props}/>}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Subregion));

class SubregionDetails extends Component {
  static propTypes = {
    subregion: PropTypes.object.isRequired
  };

  render() {
    const { name, description } = this.props.subregion;

    return (
      <Fragment>
        <h1>{name}</h1>
        <p>{description}</p>
      </Fragment>
    );
  }
}
