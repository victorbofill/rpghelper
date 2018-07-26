import React, { PureComponent } from 'react';
import styles from './PCs.css';

export default class Notes extends PureComponent {
  render() {    
    return (
      <div>
        <h1>PCs</h1>
        <div className={styles.pc}>
          <div className="header">
            <h4>Name: </h4>
            <h4>Player: </h4>
          </div>
        </div>

        <div className={styles.pc}>
          <div className="header">
            <h4>Name: </h4>
            <h4>Player: </h4>
          </div>
        </div>

        <div className={styles.pc}>
          <div className="header">
            <h4>Name: </h4>
            <h4>Player: </h4>
          </div>
        </div>

        <div className={styles.pc}>
          <div className="header">
            <h4>Name: </h4>
            <h4>Player: </h4>
          </div>
        </div>

        <div className={styles.pc}>
          <div className="header">
            <h4>Name: </h4>
            <h4>Player: </h4>
          </div>
        </div>

        <div className={styles.pc}>
          <div className="header">
            <h4>Name: </h4>
            <h4>Player: </h4>
          </div>
        </div>

      </div>
    );
  }
}