import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Dice from './dice/Dice';

import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
                <li>header list 1</li>
                <li>header list 2</li>
                <li>header list 3</li>
            </ul>
          </header>
 
          <main className={styles.main}>
            <section className={styles.dice}>
              <Dice />
            </section>
            <section className={styles.content}>
              <Switch>
              </Switch>
            </section>
          </main>
        </Fragment>
      </Router>
    );
  }
}
