import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './App.css';

import Combat from '../combat/Combat';
import Dice from '../dice/Dice';
import Location from '../location/Location';
import Notes from '../notes/Notes';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to="/location">Location</NavLink></li>
              <li><NavLink to="/combat">Combat</NavLink></li>
              <li><NavLink to="/notes">Notes</NavLink></li>
            </ul>
          </header>
 
          <main className={styles.main}>
            <div className={styles.dice}>
              <Dice />
            </div>
            <div>
              <div className={styles.content}>
                <Switch>
                  <Route path="/location" component={Location}/>
                  <Route path="/combat" component={Combat}/>
                  <Route path="/notes" component={Notes}/>
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
)(App);