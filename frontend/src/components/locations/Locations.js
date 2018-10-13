import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Location from './Location';
import { postLocation } from '../../services/api';

import styles from './Locations.css';

export default class Locations extends PureComponent {

  static propTypes = {
    locations: PropTypes.array
  };

  handleAddLocation = () => {
    const newLocation = {
      url: 'newlocation',
      name: 'New Location',
      description: 'Enter description',
      assets: 0,
      income: 0,
      overhead: 0,
      profit: 0
    };

    postLocation(newLocation);
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
                    <li key={location._id}><NavLink to={`${path}/${location.url}`}>{`${location.name}`}</NavLink></li>
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
