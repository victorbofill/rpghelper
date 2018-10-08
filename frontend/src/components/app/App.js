import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Action from '../action/Action';
import Dice from '../dice/Dice';
import Locations from '../locations/Locations';
import { loadLocations } from '../locations/actions';
import { getLocations } from '../locations/reducers';
import Notes from '../notes/Notes';
import Journal from '../journal/Journal';

import styles from './App.css';

class Test extends PureComponent {
  render() {

    return (
      <h1>Test</h1>
    );
  }
}
class App extends PureComponent {
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
              <li><NavLink to="/locations">Locations</NavLink></li>
              <li><NavLink to="/action">Action</NavLink></li>
              <li><NavLink to="/journal">Journal</NavLink></li>
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
                  {locations &&
                    <Route path={'/locations'} render={(props) => <Locations { ...props } locations={locations} />} />
                  }
                  <Route path="/action" component={Action}/>
                  <Route path="/notes" component={Notes}/>
                  <Route path="/journal" component={Journal}/>
                  <Redirect from='/*/*' to='/' />
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
)(App);