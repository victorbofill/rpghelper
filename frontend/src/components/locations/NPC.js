import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Locations.css';

import { delNPC } from '../../services/api';

export default class NPC extends PureComponent {

  static propTypes = {
    npc: PropTypes.object,
    locationObject: PropTypes.object
  };

  state = {
    url: '',
    name: '',
    disposition: '',
    dr: '',
    money: '',
    str: '',
    agi: '',
    end: '',
    will: '',
    cha: '',
    rea: '',
    per: ''
  };

  deleteNPC = () => {
    if(confirm('Are you sure?')) {
      const { _id } = this.props.locationObject;
      const { _id: npcId } = this.props.npc;
  
      delNPC(_id, npcId)
        .catch(err => console.log(err));
    }
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name] : [target.value] });
  };

  render() {
    const { deleteNPC, handleChange } = this;
    const { npc } = this.props;
    const { url, name, disposition, dr, money, str, agi, end, will, cha, rea, per } = this.state;

    return (
      <div className={styles.NPC}>
        <fieldset>
          <button type="button" onClick={deleteNPC}>Delete</button>
        </fieldset>
        <fieldset>
          <label>URL: </label>
          <input name="url" onChange={handleChange} value={url} placeholder={npc.url} type="text"/>
          <label>Name: </label>
          <input name="name" onChange={handleChange} value={name} placeholder={npc.name} type="text"/>
          <label>Disposition: </label>
          <input name="disposition" onChange={handleChange} value={disposition} placeholder={npc.disposition} type="text"/>
        </fieldset>
        <fieldset>
          <h3>Stats</h3>
          <label>DR: </label>
          <input name="dr" onChange={handleChange} value={dr} placeholder={npc.stats.dr} type="text"/>
          <label>Money: </label>
          <input name="money" onChange={handleChange} value={money} placeholder={npc.stats.money} type="text"/>
        </fieldset>
        <fieldset>
          <h3>Attributes</h3>
          <label>STR: </label>
          <input name="str" onChange={handleChange} value={str} placeholder={npc.stats.attributes.str} type="text"/>
          <label>AGI: </label>
          <input name="agi" onChange={handleChange} value={agi} placeholder={npc.stats.attributes.agi} type="text"/>
          <label>END: </label>
          <input name="agi" onChange={handleChange} value={agi} placeholder={npc.stats.attributes.agi} type="text"/>
          <label>END: </label>
          <input name="end" onChange={handleChange} value={end} placeholder={npc.stats.attributes.end} type="text"/>
          <label>WILL: </label>
          <input name="will" onChange={handleChange} value={will} placeholder={npc.stats.attributes.will} type="text"/>
          <label>CHA: </label>
          <input name="cha" onChange={handleChange} value={cha} placeholder={npc.stats.attributes.cha} type="text"/>
          <label>REA: </label>
          <input name="rea" onChange={handleChange} value={rea} placeholder={npc.stats.attributes.rea} type="text"/>
          <label>PER: </label>
          <input name="PER" onChange={handleChange} value={per} placeholder={npc.stats.attributes.PER} type="text"/>
        </fieldset>
      </div>
    );
  }
}
