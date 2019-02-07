import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Participant from './Participant';
import { getParticipants } from './reducers';
import {
  addParticipant,
  loadParticipants,
  updateParticipant,
  deleteParticipant
} from './actions';

import styles from './Action.css';

class Action extends Component {
  static propTypes = {
    participants: PropTypes.array,
    addParticipant: PropTypes.func,
    loadParticipants: PropTypes.func,
    updateParticipant: PropTypes.func,
    deleteParticipant: PropTypes.func
  };
  
  componentDidMount() {
    this.props.loadParticipants();
  }

  createParticipant = () => {
    this.props.addParticipant();
  };

  handleUpdateParticipant = participant => {
    this.props.updateParticipant(participant);
  };

  handleDeleteParticipant = id => {
    this.props.deleteParticipant(id);
  };

  render() {
    const { createParticipant, handleUpdateParticipant, handleDeleteParticipant } = this;
    const { participants } = this.props;

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
                  handleUpdateParticipant={handleUpdateParticipant}
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

export default connect(
  state => ({
    participants: getParticipants(state)
  }), 
  {
    addParticipant,
    loadParticipants,
    updateParticipant,
    deleteParticipant
  }
)(Action);
