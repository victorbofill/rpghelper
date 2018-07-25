import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './App.css';

import Action from '../action/Action';
import Dice from '../dice/Dice';
import Location from '../locations/Locations';
import Notes from '../notes/Notes';
import PCs from '../pcs/PCs';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to="/locations">Location</NavLink></li>
              <li><NavLink to="/action">Action</NavLink></li>
              <li><NavLink to="/pcs">PCs</NavLink></li>
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
                  <Route path="/locations" component={Location}/>
                  <Route path="/action" component={Action}/>
                  <Route path="/pcs" component={PCs}/>
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