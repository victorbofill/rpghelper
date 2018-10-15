import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Participant from './Participant';
import { getParticipants } from './reducers';
import { loadParticipants } from './actions';
import { postParticipant } from '../../services/api';

import styles from './Action.css';

class Action extends Component {
  static propTypes = {
    participants: PropTypes.array,
    loadParticipants: PropTypes.func,
  };
  
  componentDidMount() {
    this.props.loadParticipants();
  }

  handleCreateParticipant = () => {
    postParticipant()
      .then(() => this.props.loadParticipants());
  };

  render() {
    const { handleCreateParticipant } = this;
    const { participants } = this.props;

    return (
      <div className={styles.actionContainer}>
        <div className="participant-buttons">
          <button onClick={handleCreateParticipant}>Add Participant</button>
        </div>

        <div className="participants">
          <ul>
            { participants && !!participants.length &&
              participants.map((participant, i) => (
                <Participant
                  key={i}
                  participant = {participant}
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
  { loadParticipants }
)(Action);
