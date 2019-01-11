import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import EditSubregion from './EditSubregion';
import Locations from '../locations/Locations';

import styles from './Subregions.css';

class Subregion extends PureComponent {
  static propTypes = {
    subregion: PropTypes.object.isRequired,
    match: PropTypes.object
  };

  render() {
    const { subregion, match } = this.props;
    
    if(!subregion) return null;
    
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
              <Route exact path={`${match.path}`} render={props => <SubregionDetails subregion={subregion} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditSubregion subregion={subregion} {...props}/>}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(Subregion);

class SubregionDetails extends PureComponent {
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
