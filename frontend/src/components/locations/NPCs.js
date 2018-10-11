import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import NPC from './NPC';
import { postNPC } from '../../services/api';

import styles from './Locations.css';

export default class NPCs extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    npcs: PropTypes.array,
    locationObject: PropTypes.object
  };

  handleAddNPC = () => {
    const { locationObject } = this.props;
    const { url } = locationObject;

    const npc = {
      name: 'name'
    };

    postNPC(url, npc);
  };

  render() {
    const { match, npcs } = this.props;
    const { path } = match;
    const { handleAddNPC } = this;

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
              <li onClick={handleAddNPC}>+</li>
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
