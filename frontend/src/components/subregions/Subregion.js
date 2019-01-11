import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import EditSubregion from './EditSubregion';

import styles from './Subregions.css';

class Subregion extends PureComponent {
  static propTypes = {
    subregion: PropTypes.object.isRequired
  };

  render() {
    const { subregion } = this.props;
    
    if(!subregion) return null;
    
    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to={`/regions/${subregion.url}/`}><li>Details</li></NavLink>
              <NavLink to={`/Subregions/${Subregion.url}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route exact path={`/regions/${subregion.url}/`} render={props => <SubregionDetails subregion={subregion} {...props} />}/>
              <Route path={`/subregions/${Subregion.url}/edit`} render={props => <EditSubregion data={Subregion} {...props}/>}/>
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
