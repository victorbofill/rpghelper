import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Locations.css';

import { delNPC } from '../../services/api';

export default class NPC extends PureComponent {

  static propTypes = {
    npc: PropTypes.object,
    locationObject: PropTypes.object
  };

  deleteNPC = () => {
    const { _id } = this.props.locationObject;
    const { _id: npcId } = this.props.npc;

    delNPC(_id, npcId)
      .catch(err => console.log(err));
  };

  render() {
    const { deleteNPC } = this;

    return (
      <div className={styles.NPC}>
        <fieldset>
          <button type="button" onClick={deleteNPC}>X</button>
        </fieldset>
        <div className={'stats'}>
          <h1>Stats</h1>
          <p>This is where stats will go.</p>
        </div>

        <div className={'stories'}>
          <h1>Stories</h1>
          <p>This is where stories will go.</p>
        </div>
      </div>
    );
  }
}
