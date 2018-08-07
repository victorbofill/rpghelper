import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NPC from './NPC';
import styles from './Locations.css';

class NPCs extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to="/NPC">NPC</NavLink></li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  <Route path="/NPC" component={NPC}/>
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
)(NPCs);