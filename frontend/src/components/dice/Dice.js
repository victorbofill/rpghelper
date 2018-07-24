import React, { Component } from 'react';
import styles from './Dice.css';

const fillArray = [];
for(let i = 1; i < 11; i++) {
  fillArray.push(i);
}

export default class Dice extends Component {
  state = {
    dieType: null,
    numberRolled: 1,
    results: null
  };

  handleDieType = number => {
    this.setState({ dieType: number });
  };

  handleRoll = e => {
    e.preventDefault();
    const resultsArray = [];
    for(let i = 0; i < this.state.numberRolled; i++) {
      resultsArray.push((Math.floor(Math.random() * (this.state.dieType - 1)) + 1));
    }
    resultsArray.sort(function(a, b){return b - a;});
    this.setState({ results: resultsArray });
  };

  render() {
    return (
      <div>
        <main>
          <div className={styles.dice}>
            <div>
              <button className={this.state.dieType === 4 ? 'isActive' : null} onClick={() => this.handleDieType(4)}>4</button>
              <button className={this.state.dieType === 6 ? 'isActive' : null} onClick={() => this.handleDieType(6)}>6</button>
              <button className={this.state.dieType === 8 ? 'isActive' : null} onClick={() => this.handleDieType(8)}>8</button>
              <button className={this.state.dieType === 10 ? 'isActive' : null} onClick={() => this.handleDieType(10)}>10</button>
              <button className={this.state.dieType === 12 ? 'isActive' : null} onClick={() => this.handleDieType(12)}>12</button>
              <button className={this.state.dieType === 20 ? 'isActive' : null} onClick={() => this.handleDieType(20)}>20</button>
            </div>
            <form onSubmit={this.handleRoll}>
              <select type="select" onChange={(e) => this.setState({ numberRolled: e.target.value })}>
                {fillArray.map(i => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
              <input type="submit" value="Submit" />
            </form>
            <div>
              <ul>
                {this.state.results && this.state.results.map((i, x) => (
                  <li className='results-list' key={x}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
}