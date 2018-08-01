import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Participant from './Participant';
import styles from './Action.css';
import {
  createParticipantList,
  createParticipant,
  loadParticipantList,
  deleteParticipant,
  deleteParticipantList
} from './actions';

class Action extends Component {
  static propTypes = {
    createParticipantList: PropTypes.func,
    createParticipant: PropTypes.func,
    loadParticipantList: PropTypes.func,
    deleteParticipant: PropTypes.func,
    deleteParticipantList: PropTypes.func,
    participants: PropTypes.object,
    participantListId: PropTypes.any
  };
  
  componentDidMount() {
    if(localStorage.getItem('participantListId') && localStorage.getItem('participantListId') !== null) {
      this.props.loadParticipantList();
    } else this.handleCreateParticipantList();
  }

  handleCreateParticipantList = () => {
    if(confirm('Creating new participant list.')) {
      this.props.createParticipantList();
      setTimeout(() => localStorage.setItem('participantListId', this.props.participantListId), 0);
    } else null;
  };

  handleCreateParticipant = (id) => {
    this.props.createParticipant(id);
  };

  handleRemoveParticipant = (listId, participantId) => {
    this.props.deleteParticipant(listId, participantId);
  };

  handleRemoveParticipantList = (listId) => {
    this.props.deleteParticipantList(listId);
    localStorage.clear();
  };

  render() {
    const { participants } = this.props.participants;
  
    return (
      <div className={styles.actionContainer}>
        <div className="participant-buttons">
          <button onClick={() => this.handleCreateParticipant(this.props.participantListId)}>Add Participant</button>
          <button onClick={() => this.handleRemoveParticipantList(this.props.participantListId)}>Delete list</button>
        </div>

        <div className="participants">
          <ul>
            { participants && !!participants.length ? participants.map((participant, i) => (
              <Participant
                key={i}
                {...participant}
                participantListId={this.props.participantListId}
                handleRemoveParticipant={this.handleRemoveParticipant}
              />
            )) : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ participants: state.participants, participantListId: state.participantListId }),
  {
    loadParticipantList,
    createParticipantList,
    createParticipant,
    deleteParticipant,
    deleteParticipantList
  }
)(Action);