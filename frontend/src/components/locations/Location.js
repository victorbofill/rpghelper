import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { delLocation } from '../../services/api';
import { loadLocations } from './actions';

import NPCs from '../npcs/NPCs';
import Sublocations from './sublocations/Sublocations';
import LocationDetails from './LocationDetails';

import styles from './Locations.css';

class Location extends PureComponent {
  static propTypes = {
    locationObject: PropTypes.object,
    loadLocations: PropTypes.func
  };

  handleRemoveLocation = () => {
    if(confirm('Are you sure?')) {
      delLocation(this.props.locationObject._id)
        .then(() => this.props.loadLocations());
    }
  };

  render() {
    const { npcs, sublocations } = this.props.locationObject;
    const { match, locationObject } = this.props;
    const { path } = match;
    const { handleRemoveLocation } = this;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <NavLink to={`${path}/details`}> <li>Details</li></NavLink>
              <NavLink to={`${path}/npcs`}> <li>NPCs</li></NavLink>
              <NavLink to={`${path}/sublocations`}> <li>Sublocations</li></NavLink>
              <li onClick={handleRemoveLocation}>-</li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  <Route path={`${path}/details`} render={() => <LocationDetails location={locationObject} />}/>
                  <Route path={`${path}/npcs`} render={props => <NPCs { ...props } locationObject={locationObject} npcs={npcs} />}/>
                  <Route path={`${path}/sublocations`} render={props => <Sublocations { ...props } locationObject={locationObject} sublocations={sublocations} />}/>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => state,
  { loadLocations }
)(Location);
