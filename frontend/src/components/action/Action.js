import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Participant from './Participant';
import styles from './Action.css';
import {
  createParticipantList,
  createParticipant,
  loadParticipantList,
  updateParticipant,
  deleteParticipant,
  deleteParticipantList
} from './actions';

class Action extends Component {
  static propTypes = {
    createParticipantList: PropTypes.func,
    createParticipant: PropTypes.func,
    loadParticipantList: PropTypes.func,
    updateParticipant: PropTypes.func,
    deleteParticipant: PropTypes.func,
    deleteParticipantList: PropTypes.func,
    participants: PropTypes.object,
    participantListId: PropTypes.any
  };
  
  componentDidMount() {
    localStorage.getItem('participantListId') ? this.props.loadParticipantList() : this.handleCreateParticipantList();
  }

  handleCreateParticipantList = () => {
    if(confirm('Creating new participant list.')) {
      this.props.createParticipantList();
      localStorage.setItem('participantListId', this.props.participantListId);
    } else null;
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id] : target.value });
  };

  render() {
    const { participants } = this.props.participants;
  
    return (
      <div className={styles.actionContainer}>
        <div className="participant-buttons">
          <button>Buttons will go here</button>
        </div>

        <div className="participants">
          <ul>
            { participants && !!participants.length ? participants.map((participant, i) => (
              <Participant
                key={i}
                participant={participant}
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
    updateParticipant,
    deleteParticipant,
    deleteParticipantList
  }
)(Action);