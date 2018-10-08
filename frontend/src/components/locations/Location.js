import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NPCs from './NPCs';
import styles from './Locations.css';

class Location extends PureComponent {
  static propTypes = {
    locationObject: PropTypes.object
  };

  componentDidMount() {
    console.log('location: ', this.props.locationObject);
  }

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
                  <Route exact path="/NPCs" component={NPCs}/>
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