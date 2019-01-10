import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import EditRegion from './EditRegion';
import Locations from '../locations/Locations';
import NPCs from '../npcs/NPCs';

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
              <NavLink to={`/regions/${region.url}/NPCs`}><li>NPCs</li></NavLink>
              <NavLink to={`/regions/${region.url}/locations`}><li>Locations</li></NavLink>
              <NavLink to={`/regions/${region.url}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route path={`/regions/${region.url}/NPCs`} render={props => <NPCs regionId={region._id} {...props} />}/>
              <Route path={`/regions/${region.url}/locations`} component={Locations}/>
              <Route path={`/regions/${region.url}/edit`} render={props => <EditRegion region={region} {...props}/>}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(Region);