import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import React, { PureComponent } from 'react';

import Dice from '../dice/Dice';
import Regions from '../regions/Regions';
import Action from '../action/Action';
import Notes from '../notes/Notes';
import Journal from '../journal/Journal';

import styles from './App.css';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to="/regions">Regions</NavLink></li>
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
                  <Route path="/regions" render={props => <Regions { ...props }/>} />
                  <Route path="/action" component={Action}/>
                  <Route path="/notes" component={Notes}/>
                  <Route path="/journal" component={Journal}/>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}
