import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Locations from '../locations/Locations';
import NPCs from '../npcs/NPCs';

import styles from './Regions.css';

class Region extends PureComponent {
  static propTypes = {
    region: PropTypes.any
  };

  render() {
    if(!this.props.region) return null;
    const { region } = this.props;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to={`/regions/${region.url}/NPCs`}>NPCs</NavLink></li>
              <li><NavLink to={`/regions/${region.url}/locations`}>Locations</NavLink></li>
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