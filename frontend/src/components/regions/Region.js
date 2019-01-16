import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import EditRegion from './EditRegion';
import Subregions from '../subregions/Subregions';

import styles from './Regions.css';

class Region extends PureComponent {
  static propTypes = {
    child: PropTypes.any.isRequired
  };

  render() {
    const { child } = this.props;
    
    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to={`/regions/${child.url}/subregions`}><li>Subregions</li></NavLink>
              <NavLink to={`/regions/${child.url}/`}><li>Details</li></NavLink>
              <NavLink to={`/regions/${child.url}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route path={`/regions/${child.url}/subregions`} component={Subregions}/>
              <Route exact path={`/regions/${child.url}/`} render={props => <RegionDetails region={child} {...props} />}/>
              <Route path={`/regions/${child.url}/edit`} render={props => <EditRegion region={child} {...props}/>}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(Region);

class RegionDetails extends PureComponent {
  static propTypes = {
    region: PropTypes.object.isRequired
  };

  render() {
    const { name, description } = this.props.region;

    return (
      <Fragment>
        <h1>{name}</h1>
        <p>{description}</p>
      </Fragment>
    );
  }
}
