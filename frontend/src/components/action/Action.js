import React, { Component } from 'react';
import Participant from './Participant';
import styles from './Action.css';

export default class Action extends Component {

  state = {
    participants: [],
    name: '',
    dr: 0,
    apAdjust: 0,
    str: 0,
    agi: 0,
    end: 0,
    will: 0,
    cha: 0,
    rea: 0,
    per: 0,
    guard: 0,
    insight: 0,
    disposition: '',
    subtlety: 0,
    awareness: ''
  };

  addParticipant = (e) => {
    e.preventDefault();
    this.setState(({ participants }) => {
      participants.push({
        dr: this.state.dr,
        apAdjust: this.state.apAdjust,
        str: this.state.str,
        agi: this.state.agi,
        end: this.state.end,
        will: this.state.will,
        cha: this.state.cha,
        rea: this.state.rea,
        per: this.state.per,
        name: this.state.name,
      });
      return participants;
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id] : target.value });
  };

  render() {
    return (
      <div className={styles.actionContainer}>
        <form className="participant-form">
          <label>Name: {this.state.name}</label>
          <input id="name" onChange={this.handleChange} type="text" name="name" />

          <label>STR: {this.state.str}</label>
          <input defaultValue="1" id="str" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

          <label>AGI: {this.state.agi}</label>
          <input defaultValue="1" id="agi" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

          <label>AP Adjust: {this.state.apAdjust}</label>
          <input defaultValue="-1" id="apAdjust" onChange={this.handleChange} type="range" name="DR" min="-1" max="2" />

          <label>END: {this.state.end}</label>
          <input defaultValue="1" id="end" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

          <label>DR: {this.state.dr}</label>
          <input defaultValue="0" id="dr" onChange={this.handleChange} type="range" name="DR" min="0" max="20" />

          <label>Will: {this.state.will}</label>
          <input defaultValue="1" id="will" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

          <label>CHA: {this.state.cha}</label>
          <input defaultValue="1" id="cha" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

          <label>REA: {this.state.rea}</label>
          <input defaultValue="1" id="rea" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

          <label>PER: {this.state.per}</label>
          <input defaultValue="1" id="per" onChange={this.handleChange} type="range" name="DR" min="1" max="4" />

          <input type="submit" onClick={this.addParticipant} value="Add" />
        </form>

        <div className="participants">
          <ul>
            { this.state.participants.map((participant, i) => (
              <Participant
                key={i}
                participant={participant}
                participantIndex={i} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}