import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import NPC from './NPC';
import { postNPC } from '../../services/api';

import styles from './NPCs.css';

export default class NPCs extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    npcs: PropTypes.array,
    locationObject: PropTypes.object
  };

  handleAddNPC = () => {
    const { locationObject } = this.props;
    const { _id } = locationObject;

    const npc = {
      url: 'newnpc',
      name: 'New NPC',
      relationship: 'neutral',
      money: 1,
      str: 1,
      agi: 1,
      end: 1,
      will: 1,
      cha: 1,
      rea: 1,
      per: 1,
      notes: [],
      skills: []
    };

    postNPC(_id, npc);
  };

  render() {
    const { match, npcs, locationObject } = this.props;
    const { path } = match;
    const { handleAddNPC, handleDeleteNPC } = this;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {npcs && (npcs[0] !== null) &&
                npcs.map(npc => {
                  return (
                    <li key={npc._id}><NavLink to={`${path}/${npc.url}`}>{`${npc.name}`}</NavLink></li>
                  );
                })
              }
              <li onClick={handleAddNPC}>+</li>
              <li onClick={handleDeleteNPC}>-</li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {npcs && (npcs[0] !== null) &&
                    npcs.map(npc => {
                      return (
                        <Route key={npc._id} path={`${path}/${npc.url}`} render={props => <NPC {...props} npc={npc} locationObject={locationObject} />} />
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
