import React, { Component } from 'react';

import Participant from './Participant';
import { api } from '../../../services/api';

import styles from './Action.css';

export default class Action extends Component {
  state = {
    participants: [],
  };

  async componentDidMount() {
    const participants = await api.getAllData('participants');
    this.setState({ participants });
  }

  createParticipant = async() => {
    const { participants } = this.state;
    const newParticipant = await api.postData('participants');

    participants.push(newParticipant);
    this.setState({ participants });
  };

  handleDeleteParticipant = id => {
    api.delData('participants', id);

    const { participants } = this.state;
    const deletedParticipantIndex = participants.findIndex(participant => { return participant._id === id; });
    participants.splice(deletedParticipantIndex, 1);
    this.setState({ participants });
  };

  render() {
    const { createParticipant, handleDeleteParticipant } = this;
    const { participants } = this.state;

    return (
      <div className={styles.actionContainer}>
        <div className="participant-buttons">
          <button onClick={createParticipant}>Add Participant</button>
        </div>

        <div className="participants">
          <ul>
            { participants && !!participants.length &&
              participants.map((participant) => (
                <Participant
                  key={participant._id}
                  participant={participant}
                  handleDeleteParticipant={handleDeleteParticipant}
                />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
