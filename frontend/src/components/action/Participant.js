import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Action.css';

class Participant extends PureComponent {
  static propTypes = {
    participant: PropTypes.any,
    participantIndex: PropTypes.number,
    handleRemoveParticipant: PropTypes.func,
    participants: PropTypes.any
  };

  state = {
    ap: 0,
    insight: 0,
    guard: 0,
    disposition: '',
    subtlety: 0,
    awareness: '',
    hp: 0,
    bleeding: 0,
    blinded: 'none',
    burning: 0,
    crippled: 'none',
    deafened: 'non',
    afraid: false,
    immobilized: false,
    prone: false,
    unconscious: false,
    dead: false
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id] : target.value });
    setTimeout(() => {
      localStorage.setItem('participants', (JSON.stringify(this.props.participants)));
    }, 0);
  };

  handleCheckbox = ({ target }) => {
    this.setState({ [target.id] : target.checked });
    setTimeout(() => {
      localStorage.setItem('participants', (JSON.stringify(this.props.participants)));
    }, 0);
  };

  render() {
    const { dr, apAdjust, str, agi, end, will, cha, rea, per, name } = this.props.participant;
    const { hp, ap, insight, guard, disposition, subtlety, awareness } = this.state;
    const { participantIndex } = this.props;

    return (
      <li>
        <div className={styles.participant}>
          <div className="header">
            <h4>{name}</h4>
            <button onClick={() => this.props.handleRemoveParticipant(participantIndex)}>X</button>
          </div>
          <div className="left-table">
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
                  <td>{str}</td>
                  <td>{agi}</td>
                  <td>{end}</td>
                  <td>{will}</td>
                  <td>{cha}</td>
                  <td>{rea}</td>
                  <td>{per}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="right-table">
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
                  <td>{apAdjust}</td>
                  <td>{ap}</td>
                  <td>{subtlety}</td>
                  <td>{dr}</td>
                  <td>{hp}</td>
                  <td>{guard}</td>
                  <td>{disposition}</td>
                  <td>{insight}</td>
                  <td>{awareness}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="status">
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
                  <td><input id="bleeding" value={this.state.bleeding} type="number" onChange={this.handleChange}/></td>
                  <td>
                    <select id="blinded" onChange={this.handleChange} value={this.state.blinded}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td><input id="burning" type="number" onChange={this.handleChange} value={this.state.burning}/></td>
                  <td>
                    <select id="crippled" onChange={this.handleChange} value={this.state.burning}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td>
                    <select id="deafened" onChange={this.handleChange} value={this.state.deafened}>
                      <option value="none">none</option>
                      <option value="minor">minor</option>
                      <option value="catastrophic">catastrophic</option>
                    </select>
                  </td>
                  <td><input id="afraid" type="checkbox" onChange={this.handleCheckbox} checked={this.state.afraid}/></td>
                  <td><input id="immobilized" type="checkbox" onChange={this.handleCheckbox} checked={this.state.immobilized} /></td>
                  <td><input id="prone" type="checkbox" onChange={this.handleCheckbox} checked={this.state.prone}/></td>
                  <td><input id="unconscious" type="checkbox" onChange={this.handleCheckbox} checked={this.state.unconscious}/></td>
                  <td><input id="dead" type="checkbox" onChange={this.handleCheckbox} checked={this.state.dead}/></td>
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
  state => ({ participants: state.participants })
)(Participant);