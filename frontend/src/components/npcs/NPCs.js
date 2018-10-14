import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import { loadLocations } from '../locations/actions';
import NPC from './NPC';
import { postNPC } from '../../services/api';

import styles from './NPCs.css';

class NPCs extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    npcs: PropTypes.array,
    locationObject: PropTypes.object,
    loadLocations: PropTypes.func
  };

  handleAddNPC = () => {
    const { locationObject } = this.props;
    const { _id } = locationObject;

    const npc = {
      url: 'newnpc',
      name: 'New NPC',
      relationship: 'Neutral',
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

    postNPC(_id, npc)
      .then(() => this.props.loadLocations());
  };

  render() {
    const { match, npcs, locationObject } = this.props;
    const { path } = match;
    const { handleAddNPC } = this;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {npcs && (npcs[0] !== null) &&
                npcs.map(npc => {
                  return (
                    <NavLink key={npc._id} to={`${path}/${npc.url}`}><li>{`${npc.name}`}</li></NavLink>
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

export default connect(
  null,
  { loadLocations }
)(NPCs);
