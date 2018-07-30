import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Action.css';

class Participant extends PureComponent {
  static propTypes = {
    handleRemoveParticipant: PropTypes.func,
    participantListId: PropTypes.any,
    _id: PropTypes.any, 
    dr: PropTypes.any,
    apAdjust: PropTypes.any,
    str: PropTypes.any,
    agi: PropTypes.any,
    end: PropTypes.any,
    will: PropTypes.any,
    cha: PropTypes.any,
    rea: PropTypes.any,
    per: PropTypes.any,
    name: PropTypes.any,
    hp: PropTypes.any,
    ap: PropTypes.any,
    insight: PropTypes.any,
    guard: PropTypes.any,
    disposition: PropTypes.any,
    subtlety: PropTypes.any,
    awareness: PropTypes.any,
    bleeding: PropTypes.any,
    blinded: PropTypes.any,
    burning: PropTypes.any,
    crippled: PropTypes.any,
    deafened: PropTypes.any,
    afraid: PropTypes.any,
    immobilized: PropTypes.any,
    prone: PropTypes.any,
    unconscious: PropTypes.any,
    dead: PropTypes.any
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id] : target.value });
  };

  handleCheckbox = ({ target }) => {
    this.setState({ [target.id] : target.checked });
  };

  render() {
    const {
      dr,
      apAdjust,
      str,
      agi,
      end,
      will,
      cha,
      rea,
      per,
      name,
      hp,
      ap,
      insight,
      guard,
      disposition,
      subtlety,
      awareness,
      bleeding,
      blinded,
      burning,
      crippled,
      deafened,
      afraid,
      immobilized,
      prone,
      unconscious,
      dead  
    } = this.props;

    const id = this.props._id;

    return (
      <li>
        <div className={styles.participant}>
          <div className="header">
            <h4>{name}</h4>
            <button onClick={() => this.props.handleRemoveParticipant(this.props.participantListId, id)}>X</button>
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
          </div>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { }
)(Participant);