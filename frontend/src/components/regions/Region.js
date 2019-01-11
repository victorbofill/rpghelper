import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Edit from '../edit/Edit';
import Subregions from '../subregions/Subregions';

import styles from './Regions.css';

class Region extends PureComponent {
  static propTypes = {
    region: PropTypes.any.isRequired
  };

  render() {
    if(!this.props.region) return null;
    const { region } = this.props;

    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to={`/regions/${region.url}/subregions`}><li>Subregions</li></NavLink>
              <NavLink to={`/regions/${region.url}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route path={`/regions/${region.url}/subregions`} component={Subregions}/>
              <Route path={`/regions/${region.url}/edit`} render={props => <Edit data={region} {...props}/>}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(Region);