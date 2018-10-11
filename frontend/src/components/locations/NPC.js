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
    delNPC(this.props.locationObject.url, this.props.npc._id);
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
