import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NPCs from '../npcs/NPCs';
import Locations from '../locations/Locations';
import styles from './Regions.css';

class Region extends PureComponent {
  static propTypes = {
    region: PropTypes.any
  };

  render() {
    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to="/NPCs">NPCs</NavLink></li>
              <li><NavLink to="/locations">Locations</NavLink></li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  <Route path="/NPCs" component={NPCs}/>
                  <Route path="/locations" component={Locations}/>
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
)(Region);