import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NPCs from './NPCs';
import styles from './Locations.css';

class Location extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to="/NPCs">NPCs</NavLink></li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  <Route path="/NPCs" component={NPCs}/>
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
)(Location);