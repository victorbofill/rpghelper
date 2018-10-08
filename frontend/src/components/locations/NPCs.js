import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import NPC from './NPC';
import styles from './Locations.css';

export default class NPCs extends PureComponent {
  static propTypes = {
    npcs: PropTypes.array,
    match: PropTypes.object
  };

  render() {
    const { match, npcs } = this.props;
    const { path } = match;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {npcs &&
                npcs.map(npc => {
                  return (
                    <li key={npc._id}><NavLink to={`${path}/${npc.url}`}>{`${npc.name}`}</NavLink></li>
                  );
                })
              }
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {npcs &&
                    npcs.map(npc => {
                      return (
                        <Route key={npc._id} path={`${path}/${npc.url}`} render={props => <NPC {...props} npc={npc} />} />
                      );
                    })
                  }
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}
