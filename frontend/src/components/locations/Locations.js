import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Location from './Location';

import styles from './Locations.css';

class Locations extends PureComponent {

  static propTypes = {
    locations: PropTypes.array
  };

  render() {
    const { locations, match } = this.props;
    const { path } = match;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {locations && 
                locations.map(location => {
                  return (
                    <li key={location.url}><NavLink to={`${path}/${location.url}`}>{`${location.name}`}</NavLink></li>
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
                        <Route key={location.url} path={`${path}/${location.url}`} render={props => <Location {...props} location={location} />} />
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
)(Locations);