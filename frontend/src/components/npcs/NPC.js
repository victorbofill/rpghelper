import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { delNPC, putNPC } from '../../services/api';

import styles from './NPCs.css';

export default class NPC extends PureComponent {

  static propTypes = {
    npc: PropTypes.object,
    locationObject: PropTypes.object
  };

  state = {
    url: '',
    name: '',
    relationship: '',
    money: '',
    str: '',
    agi: '',
    end: '',
    will: '',
    cha: '',
    rea: '',
    per: '',
    editing: false
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name] : [target.value] });
  };

  handleUpdateNPC = () => {
    const { _id } = this.props.locationObject;
    const { _id: npcId } = this.props.npc;
    const { url, name, relationship, money, str, agi, end, will, cha, rea, per } = this.state;

    const updatedNPC = { url, name, relationship, money, str, agi, end, will, cha, rea, per };

    putNPC(_id, npcId, updatedNPC)
      .catch(err => console.log(err));
  };

  handleDeleteNPC = () => {
    const { _id } = this.props.locationObject;
    const { _id: npcId } = this.props.npc;
    
    if(confirm('Are you sure?')) delNPC(_id, npcId);
  };

  handleToggleEditing = () => {
    const { editing } = this.state;

    this.setState({ editing: !editing });
  };

  render() {
    const { handleChange, handleUpdateNPC, handleDeleteNPC, handleToggleEditing } = this;
    const { npc } = this.props;
    const { url, name, relationship, money, str, agi, end, will, cha, rea, per, editing } = this.state;

    return (
      <div className={styles.NPC}>
        <button type="button" onClick={handleToggleEditing}>Edit</button>

        {!editing &&
        <Fragment>
          <article>
            <h3>Name: </h3>
            <p>{npc.name}</p>
            <h3>Relationship: </h3>
            <p>{npc.relationship}</p>
          </article>
          <article>
            <h3>Attributes</h3>
            <table>
              <thead>
                <tr>
                  <th>STR:</th>
                  <th>AGI:</th>
                  <th>END:</th>
                  <th>WILL:</th>
                  <th>CHA:</th>
                  <th>REA:</th>
                  <th>PER:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{npc.str}</td>
                  <td>{npc.agi}</td>
                  <td>{npc.end}</td>
                  <td>{npc.will}</td>
                  <td>{npc.cha}</td>
                  <td>{npc.rea}</td>
                  <td>{npc.per}</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article>
            <h3>Money: </h3>
            <p>{npc.money}</p>
          </article>
        </Fragment>
        }

        {editing && 
        <Fragment>
          <fieldset>
            <button type="button" onClick={handleDeleteNPC}>Delete</button>
            <button type="button" onClick={handleUpdateNPC}>Update</button>
          </fieldset>
          <fieldset>
            <label>URL: </label>
            <input name="url" onChange={handleChange} value={url} placeholder={npc.url} type="text"/>
            <label>Name: </label>
            <input name="name" onChange={handleChange} value={name} placeholder={npc.name} type="text"/>
            <label>Relationship: </label>
            <input name="relationship" onChange={handleChange} value={relationship} placeholder={npc.relationship} type="text"/>
          </fieldset>
          <fieldset>
            <h3>Stats</h3>
            <label>Money: </label>
            <input name="money" onChange={handleChange} value={money} placeholder={npc.money} type="text"/>
          </fieldset>
          <fieldset>
            <h3>Attributes</h3>
            <label>STR: </label>
            <input name="str" onChange={handleChange} value={str} placeholder={npc.str} type="text"/>
            <label>AGI: </label>
            <input name="agi" onChange={handleChange} value={agi} placeholder={npc.agi} type="text"/>
            <label>END: </label>
            <input name="end" onChange={handleChange} value={end} placeholder={npc.end} type="text"/>
            <label>WILL: </label>
            <input name="will" onChange={handleChange} value={will} placeholder={npc.will} type="text"/>
            <label>CHA: </label>
            <input name="cha" onChange={handleChange} value={cha} placeholder={npc.cha} type="text"/>
            <label>REA: </label>
            <input name="rea" onChange={handleChange} value={rea} placeholder={npc.rea} type="text"/>
            <label>PER: </label>
            <input name="per" onChange={handleChange} value={per} placeholder={npc.PER} type="text"/>
          </fieldset>
        </Fragment>
        }
      </div>
    );
  }
}
