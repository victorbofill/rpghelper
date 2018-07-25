import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Action.css';

export default class Participant extends Component {
  static propTypes = {
    participant: PropTypes.any,
  };

  state = {
    ap: 0,
    insight: 0,
    guard: 0,
    disposition: '',
    subtlety: 0,
    awareness: '',
    hp: 0
  };

  render() {
    const { dr, apAdjust, str, agi, end, will, cha, rea, per, name } = this.props.participant;
    const { hp, ap, insight, guard, disposition, subtlety, awareness } = this.state;
    return (
      <li>
        <div className={styles.participant}>
          <h4>{name}</h4>
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
        </div>
      </li>
    );
  }
}