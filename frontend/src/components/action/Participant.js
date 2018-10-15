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

  handleNumberChange = ({ target }) => {
    this.setState({ [target.name] : parseInt(target.value) });
  };

  handleCheckbox = ({ target }) => {
    this.setState({ [target.name] : target.checked });
  };

  handleRemoveParticipant = () => {
    const { _id } = this.props.participant;

    delParticipant(_id)
      .then(() => this.props.loadParticipants());
  };

  handleRollAp = () => {
    const { ap } = this.state;
    const { apAdjust } = this.state;
    const random = (Math.floor(Math.random() * (8 - 1 + 1)) + 1);
    let newAp = ap + apAdjust + random;
    if(newAp > 20) newAp = 20;

    this.setState({ ap: parseInt(newAp) });
  };

  handleResetAp = () => {
    const { apAdjust } = this.state;
    this.setState({ apAdjust: parseInt(apAdjust) });
    this.setState({ ap: 0 });
  };

  handleRollSubtlety = () => {
    const { subtlety } = this.state;
    const random = (Math.floor(Math.random() * (8 - 1 + 1)) + 1);
    let newSubtlety = subtlety + random;
    if(newSubtlety > 20) newSubtlety = 20;

    this.setState({ subtlety: parseInt(newSubtlety) });
  };  

  handleResetSubtlety = () => {
    this.setState({ subtlety: 0 });
  };

  handleRollInsight = () => {
    const { insight } = this.state;
    const random = (Math.floor(Math.random() * (8 - 1 + 1)) + 1);
    let newInsight = insight + random;
    if(newInsight > 20) newInsight = 20;

    this.setState({ insight: parseInt(newInsight) });
  };  

  handleResetInsight = () => {
    this.setState({ insight: 0 });
  };

  render() {
    const {
      handleRemoveParticipant, handleChange, handleNumberChange, handleRollAp, handleResetAp,
      handleRollSubtlety, handleResetSubtlety, handleRollInsight, handleResetInsight, handleCheckbox
    } = this;
    const {
      str, agi, end, will, cha, rea, per,
      apAdjust, ap, dr, hp, guard, disposition, subtlety, insight, awareness,
      bleeding, blinded, burning, crippled, deafened, afraid, prone, dead, immobilized, unconscious
    } = this.state;

    return (
      <li>
        <div className={styles.participant}>
          <div className="header">
            <input name="name" value={name} type="text" onChange={handleChange}/>
            <button onClick={handleRemoveParticipant}>X</button>
          </div>
          <div className="attributes">
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
                  <td><input name="str" value={str} type="number" min="1" max="4" onChange={handleNumberChange}/></td>
                  <td><input name="agi" value={agi} type="number" min="1" max="4" onChange={handleNumberChange}/></td>
                  <td><input name="end" value={end} type="number" min="1" max="4" onChange={handleNumberChange}/></td>
                  <td><input name="will" value={will} type="number" min="1" max="4" onChange={handleNumberChange}/></td>
                  <td><input name="cha" value={cha} type="number" min="1" max="4" onChange={handleNumberChange}/></td>
                  <td><input name="rea" value={rea} type="number" min="1" max="4" onChange={handleNumberChange}/></td>
                  <td><input name="per" value={per} type="number" min="1" max="4" onChange={handleNumberChange}/></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="status">
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
                  <td><input name="apAdjust" value={apAdjust} type="number" min="-1" max="2" onChange={handleNumberChange}/></td>
                  <td>
                    <button onClick={handleRollAp}>Roll</button>
                    <input name="ap" value={ap} type="number" min="-1" max="2" onChange={handleNumberChange}/>
                    <button onClick={handleResetAp}>Reset</button>
                  </td>
                  <td>
                    <button onClick={handleRollSubtlety}>Roll</button>
                    <input name="subtlety" value={subtlety} type="number" min="0" max="20" onChange={handleNumberChange}/>
                    <button onClick={handleResetSubtlety}>Reset</button>
                  </td>
                  <td><input name="dr" value={dr} type="number" min="0" max="12" onChange={handleNumberChange}/></td>
                  <td><input name="hp" value={hp} type="number" min="-10" max="50" onChange={handleNumberChange}/></td>
                  <td><input name="guard" value={guard} type="number" min="0" max="20" onChange={handleNumberChange}/></td>
                  <td>
                    <select name="disposition" onChange={handleChange} value={disposition}>
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
                  <td>
                    <button onClick={handleRollInsight}>Roll</button>
                    <input name="insight" value={insight} type="number" min="0" max="20" onChange={handleNumberChange}/>
                    <button onClick={handleResetInsight}>Reset</button>
                  </td>
                  <td>
                    <select name="awareness" onChange={handleChange} value={awareness}>
                      <option value="oblivious">oblivious</option>
                      <option value="resting">resting</option>
                      <option value="cautious">cautious</option>
                      <option value="engaged">engaged</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="debuffs">
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
                  <td><input name="bleeding" value={bleeding} type="number" onChange={handleNumberChange}/></td>
                  <td>
                    <select name="blinded" onChange={handleChange} value={blinded}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td><input name="burning" type="number" onChange={handleNumberChange} value={burning}/></td>
                  <td>
                    <select name="crippled" onChange={handleChange} value={crippled}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td>
                    <select name="deafened" onChange={handleChange} value={deafened}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td><input name="afraid" type="checkbox" onChange={handleCheckbox} checked={afraid}/></td>
                  <td><input name="immobilized" type="checkbox" onChange={handleCheckbox} checked={immobilized} /></td>
                  <td><input name="prone" type="checkbox" onChange={handleCheckbox} checked={prone}/></td>
                  <td><input name="unconscious" type="checkbox" onChange={handleCheckbox} checked={unconscious}/></td>
                  <td><input name="dead" type="checkbox" onChange={handleCheckbox} checked={dead}/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { loadParticipants }
)(Participant);