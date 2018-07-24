import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Combatant extends Component {
  static propTypes = {
    combatant: PropTypes.any,
  };

  render() {
    const { dr, apAdjust, str, agi, end, will, cha, rea, per } = this.props.combatant;

    return (
      <li>
        <h3>Combatant</h3>
        <table>
          <thead>
            <tr>
              <th>DR</th>
              <th>AP Adjust</th>
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
              <td>{dr}</td>
              <td>{apAdjust}</td>
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
      </li>
    );
  }
}