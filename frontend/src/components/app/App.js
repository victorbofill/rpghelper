import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './App.css';

import Combat from '../combat/Combat';
import Dice from '../dice/Dice';
import Location from '../location/Location';
import Notes from '../notes/Notes';
import NPC from '../npc/NPC';
import Story from '../story/Story';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <main className={styles.app}>
            <div className={styles.dice}>
              <Dice />
            </div>

            <div>
              <div className={styles.header}>
                <ul>
                  <li><NavLink to="/combat">Combat</NavLink></li>
                  <li><NavLink to="/location">Location</NavLink></li>
                  <li><NavLink to="/notes">Notes</NavLink></li>
                  <li><NavLink to="/NPC">NPC</NavLink></li>
                  <li><NavLink to="/story">Story</NavLink></li>
                </ul>
                <div className={styles.content}>
                  <Switch>
                    <Route path="/combat" component={Combat}/>
                    <Route path="/location" component={Location}/>
                    <Route path="/notes" component={Notes}/>
                    <Route path="/NPC" component={NPC}/>
                    <Route path="/story" component={Story}/>
                  </Switch>
                </div>
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