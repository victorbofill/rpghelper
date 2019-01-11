import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import React, { PureComponent, Fragment } from 'react';

import Dice from '../dice/Dice';
import Regions from '../regions/Regions';
import Action from '../action/Action';
import Journal from '../journal/Journal';
import Notes from '../notes/Notes';

import styles from './App.css';

export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to="/regions"><li>Regions</li></NavLink>
              <NavLink to="/action"><li>Action</li></NavLink>
              <NavLink to="/journal"><li>Journal</li></NavLink>
              <NavLink to="/notes"><li>Notes</li></NavLink>
            </ul>
          </header>
 
          <main className={styles.main}>
            <section className={styles.dice}>
              <Dice />
            </section>
            <section className={styles.content}>
              <Switch>
                <Route path="/regions" render={props => <Regions { ...props }/>} />
                <Route path="/action" component={Action}/>
                <Route path="/journal" component={Journal}/>
                <Route path="/notes" component={Notes}/>
              </Switch>
            </section>
          </main>
        </Fragment>
      </Router>
    );
  }
}
