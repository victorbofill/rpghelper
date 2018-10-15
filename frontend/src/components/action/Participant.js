import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { delParticipant } from '../../services/api';
import { loadParticipants } from './actions';

import styles from './Action.css';

class Participant extends PureComponent {
  static propTypes = {
    loadParticipants: PropTypes.func,
    participant: PropTypes.object
  };

  state = { ...this.props.participant };

  handleChange = ({ target }) => {
    this.setState({ [target.name] : target.value });
  };

  handleCheckbox = ({ target }) => {
    this.setState({ [target.name] : target.checked });
  };

  handleRemoveParticipant = () => {
    const { _id } = this.props.participant;

    delParticipant(_id)
      .then(() => this.props.loadParticipants());
  };

  // handleApRoll = () => {
  //   const { ap } = this.state;
  //   const apAdjust = this.state.apAdjust;
  //   const random = (Math.floor(Math.random() * (8 - 1 + 1)) + 1);
  //   let newAp = ap + apAdjust + random;
  //   if(newAp > 20) newAp = 20;
  //   this.setState({ ap: newAp });
  //   setTimeout(() => {
  //     updateParticipant(this.props.participantListId, { _id: this.state._id, ap : newAp });
  //   }, 0);
  // };

  // resetAp = () => {
  //   this.setState({ ap: 0 });
  //   this.setState({ apAdjust: parseInt(this.state.apAdjust) });
  //   setTimeout(() => {
  //     updateParticipant(this.props.participantListId, { _id: this.state._id, ap : this.state.ap });
  //   }, 0);
  // };

  render() {
    const { handleRemoveParticipant, handleChange } = this;

    return (
      <li>
        <div className={styles.participant}>
          <div className="header">
            <input name="name" value={name} type="text" onChange={handleChange}/>
            <button onClick={handleRemoveParticipant}>X</button>
          </div>
          {/* <div className="attributes">
            <table>
              <thead>
                <tr>
                  <th>STR</th>
                  <th>AGI</th>
                  <th>END</th>
                  <th>Will</th>
                  <th>CHA</th>
                  <th>REA</th>
                  <th>PER</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input name="str" value={str} type="number" min="1" max="4" onChange={handleChange}/></td>
                  <td><input name="agi" value={agi} type="number" min="1" max="4" onChange={handleChange}/></td>
                  <td><input name="end" value={end} type="number" min="1" max="4" onChange={handleChange}/></td>
                  <td><input name="will" value={will} type="number" min="1" max="4" onChange={handleChange}/></td>
                  <td><input name="cha" value={cha} type="number" min="1" max="4" onChange={handleChange}/></td>
                  <td><input name="rea" value={rea} type="number" min="1" max="4" onChange={handleChange}/></td>
                  <td><input name="per" value={per} type="number" min="1" max="4" onChange={handleChange}/></td>
                </tr>
              </tbody>
            </table>
          </div> */}

          {/* <div className="status">
            <table>
              <thead>
                <tr>
                  <th>AP Adjust</th>
                  <th>AP</th>
                  <th>Subtlety</th>
                  <th>DR</th>
                  <th>HP</th>
                  <th>Guard</th>
                  <th>Disposition</th>
                  <th>Insight</th>
                  <th>Awareness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input id="apAdjust" value={apAdjust} type="number" min="-1" max="2" onChange={this.handleChange}/></td>
                  <td>
                    <button onClick={() => this.handleApRoll(this.props.participantListId, this.props._id)}>Roll</button>
                    <input id="ap" value={ap} type="number" min="0" max="20" onChange={this.handleChange}/>
                    <button onClick={() => this.resetAp()}>Reset</button>
                  </td>
                  <td><input id="subtlety" value={subtlety} type="number" min="0" max="20" onChange={this.handleChange}/></td>
                  <td><input id="dr" value={dr} type="number" min="0" max="12" onChange={this.handleChange}/></td>
                  <td><input id="hp" value={hp} type="number" min="-10" max="50" onChange={this.handleChange}/></td>
                  <td><input id="guard" value={guard} type="number" min="0" max="20" onChange={this.handleChange}/></td>
                  <td>
                    <select id="disposition" onChange={this.handleChange} value={disposition}>
                      <option value="loyal">loyal</option>
                      <option value="friend">friend</option>
                      <option value="friendly">friendly</option>
                      <option value="neutral">neutral</option>
                      <option value="distrustful">distrustful</option>
                      <option value="socially hostile">socially hostile</option>
                      <option value="enemy">enemy</option>
                      <option value="nemesis">nemesis</option>
                    </select>
                  </td>
                  <td><input id="insight" value={insight} type="number" min="0" max="20" onChange={this.handleChange}/></td>
                  <td>
                    <select id="awareness" onChange={this.handleChange} value={awareness}>
                      <option value="oblivious">oblivious</option>
                      <option value="resting">resting</option>
                      <option value="cautious">cautious</option>
                      <option value="engaged">engaged</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}

          {/* <div className="debuffs">
            <table>
              <thead>
                <tr>
                  <th>Bleeding</th>
                  <th>Blinded</th>
                  <th>Burning</th>
                  <th>Crippled</th>
                  <th>Deafened</th>
                  <th>Afraid</th>
                  <th>Immobilized</th>
                  <th>Prone</th>
                  <th>Unconscious</th>
                  <th>Dead</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input id="bleeding" value={bleeding} type="number" onChange={this.handleChange}/></td>
                  <td>
                    <select id="blinded" onChange={this.handleChange} value={blinded}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td><input id="burning" type="number" onChange={this.handleChange} value={burning}/></td>
                  <td>
                    <select id="crippled" onChange={this.handleChange} value={crippled}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td>
                    <select id="deafened" onChange={this.handleChange} value={deafened}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td><input id="afraid" type="checkbox" onChange={this.handleCheckbox} checked={afraid}/></td>
                  <td><input id="immobilized" type="checkbox" onChange={this.handleCheckbox} checked={immobilized} /></td>
                  <td><input id="prone" type="checkbox" onChange={this.handleCheckbox} checked={prone}/></td>
                  <td><input id="unconscious" type="checkbox" onChange={this.handleCheckbox} checked={unconscious}/></td>
                  <td><input id="dead" type="checkbox" onChange={this.handleCheckbox} checked={dead}/></td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { loadParticipants }
)(Participant);