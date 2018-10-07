import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Location from './Location';
import { loadLocations } from './actions';
import { getLocations } from './reducers';

import styles from './Locations.css';

class NavigationLink extends PureComponent {
  static propTypes = {
    locationName: PropTypes.string,
    location: PropTypes.object
  };

  render() {
    const { locationName } = this.props;

    return (
      <li><NavLink to={`/${locationName}`}>Location</NavLink></li>
    );
  }
}

class LocationRoute extends PureComponent {
  static propTypes = {
    location: PropTypes.object
  };

  render() {
    const { location } = this.props;
    const { name } = location;

    return (
      <Route path={`/${name}`} render={props => <Location {...props} location={location}/>} />
    );
  }
}

class Locations extends PureComponent {

  static propTypes = {
    loadLocations: PropTypes.func,
    locations: PropTypes.array
  };

  componentDidMount() {
    this.props.loadLocations()
      .then(() => getLocations());
  }

  render() {
    const { locations } = this.props;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {locations && 
                locations.map(location => {
                  return (
                    <LocationRoute key={location} location={location} />
                  );
                })
              }
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {locations && 
                    locations.map(location => {
                      return (
                        <NavigationLink key={location} location={location} locationName={location.name}/>
                      );
                    })
                  }
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
  state => ({
    locations: getLocations(state)
  }),
  {
    loadLocations
  }
)(Locations);