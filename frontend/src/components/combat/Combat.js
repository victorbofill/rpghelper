import React, { Component } from 'react';
import Combatant from './Combatant';
import styles from './Combat.css';

export default class Combat extends Component {

  state = {
    combatants: [],
    dr: 0,
    apAdjust: 0,
    str: 0,
    agi: 0,
    end: 0,
    will: 0,
    cha: 0,
    rea: 0,
    per: 0
  };

  addCombatant = () => {
    this.setState(({ combatants }) => {
      combatants.push({
        dr: this.state.dr,
        apAdjust: this.state.apAdjust,
        str: this.state.str,
        agi: this.state.agi,
        end: this.state.end,
        will: this.state.will,
        cha: this.state.cha,
        rea: this.state.rea,
        per: this.state.per
      });
      return combatants;
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id] : target.value });
  };

  render() {
    return (
      <div className={styles.combat}>
        <h1>Combat</h1>
        <div className="left">
          <form className={styles.combatantForm}>
            <label>DR: {this.state.dr}</label>
            <input defaultValue="0" id="dr" onChange={this.handleChange} type="range" name="DR" min="0" max="20" />

            <label>AP Adjust: {this.state.apAdjust}</label>
            <input defaultValue="-1" id="apAdjust" onChange={this.handleChange} type="range" name="DR" min="-1" max="2" />

            <label>STR: {this.state.str}</label>
            <input defaultValue="1" id="str" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

            <label>AGI: {this.state.agi}</label>
            <input defaultValue="1" id="agi" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

            <label>END: {this.state.end}</label>
            <input defaultValue="1" id="end" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

            <label>Will: {this.state.will}</label>
            <input defaultValue="1" id="will" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

            <label>CHA: {this.state.cha}</label>
            <input defaultValue="1" id="cha" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

            <label>REA: {this.state.rea}</label>
            <input defaultValue="1" id="rea" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

            <label>PER: {this.state.per}</label>
            <input defaultValue="1" id="per" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

          </form>
          <button onClick={this.addCombatant}>ADD</button>
        </div>
        <div className={styles.right}>
          <ul>
            { this.state.combatants.map((combatant, i) => (
              <Combatant
                key={i}
                combatant={combatant}
                combatantIndex={i} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}