import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Location from './Location';
import { loadLocations } from './actions';
import { getLocations } from './reducers';
import { postLocation } from '../../services/api';

import styles from './Locations.css';

class Locations extends PureComponent {

  static propTypes = {
    match: PropTypes.object,
    locations: PropTypes.array
  };

  componentDidMount() {
    this.props.loadLocations();
  }

  handleAddLocation = () => {
    const newLocation = {
      url: 'newlocation',
      name: 'New Location',
      description: 'Enter description',
      assets: '0',
      income: '0',
      overhead: '0',
      profit: '0'
    };

    postLocation(newLocation)
      .then(() => this.props.loadLocations());
  };

  render() {
    const { locations, match } = this.props;
    const { path } = match;
    const { handleAddLocation } = this;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {locations && 
                locations.map(location => {
                  return (
                    <NavLink key={location._id} to={`${path}/${location.url}`}><li>{`${location.name}`}</li></NavLink>
                  );
                })
              }
              <li onClick={handleAddLocation}>+</li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {locations &&
                    locations.map(locationObject => {
                      return (
                        <Route key={locationObject._id} path={`${path}/${locationObject.url}`} render={props => <Location {...props} locationObject={locationObject} />} />
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
  }), {
    loadLocations
  }
)(Locations);
