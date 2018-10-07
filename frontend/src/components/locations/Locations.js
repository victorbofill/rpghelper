import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Location from './Location';
import { loadLocations } from './actions';
import { getLocations } from './reducers';

import styles from './Locations.css';

class Locations extends PureComponent {

  static propTypes = {
    loadLocations: PropTypes.func,
    locations: PropTypes.array
  };

  componentDidMount() {
    this.props.loadLocations();
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
                    <li key={location.url}><NavLink to={`/locations/${location.url}`}>{`${location.name}`}</NavLink></li>
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
                        <Route key={location.url} path={`/locations/${location.url}`} render={props => <Location {...props} location={location} />} />
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