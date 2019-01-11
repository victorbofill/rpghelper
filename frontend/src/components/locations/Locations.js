import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Location from './Location';
import { getLocations } from './reducers';
import {
  addLocation,
  loadLocations,
  updateLocation,
  deleteLocation
} from './actions';

import styles from './Locations.css';

class Locations extends PureComponent {

  static propTypes = {
    locations: PropTypes.array,
    addLocation: PropTypes.func,
    loadLocations: PropTypes.func,
    updateLocation: PropTypes.func,
    deleteLocation: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadLocations();
  }

  handleCreateLocation = () => {
    this.props.addLocation();
  };

  render() {
    const { handleCreateLocation } = this;
    const { locations, match } = this.props;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {locations && locations.map(locationObject => (<NavLink key={locationObject._id} to={`${match.path}/${locationObject.url}`}><li >{locationObject.name}</li></NavLink>))}
              <li onClick={handleCreateLocation}>+</li>
            </ul>
          </header>

          <div>
            <Switch>
              {locations && locations.map(locationObject => (<Route key={locationObject._id} path={`${match.path}/${locationObject.url}`} render={props => <Location {...props} locationObject={locationObject} {...props} />}/>))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    locations: getLocations(state)
  }), {
    addLocation,
    loadLocations,
    updateLocation,
    deleteLocation  
  }
)(Locations);
