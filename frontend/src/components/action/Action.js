import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Participant from './Participant';
import styles from './Action.css';
import {
  loadParticipants,
  addParticipant,
  clearParticipants,
  removeParticipant
} from './actions';

class Action extends Component {
  static propTypes = {
    addParticipant: PropTypes.func,
    loadParticipants: PropTypes.func,
    clearParticipants: PropTypes.func,
    removeParticipant: PropTypes.func,
    participants: PropTypes.array
  };
  
  state = {
    name: '',
    dr: 0,
    apAdjust: 0,
    str: 0,
    agi: 0,
    end: 0,
    will: 0,
    cha: 0,
    rea: 0,
    per: 0,
    guard: 0,
    insight: 0,
    disposition: '',
    subtlety: 0,
    awareness: ''
  };

  componentDidMount() {
    this.props.loadParticipants();
  }

  handleAddParticipant = (e) => {
    e.preventDefault();
    this.props.addParticipant(this.state);
    setTimeout(() => {
      localStorage.setItem('participants', (JSON.stringify(this.props.participants)));
    }, 0);
  };
  
  handleRemoveParticipant = (index) => {
    const newParticipants = this.props.participants;
    newParticipants.splice(index, 1);
    this.props.removeParticipant(newParticipants);
    setTimeout(() => {
      localStorage.setItem('participants', (JSON.stringify(this.props.participants)));
    }, 0);
    this.forceUpdate();
  };
  
  handleClearParticipants = (e) => {
    e.preventDefault();
    if(confirm('Are you sure?')) {
      localStorage.clear();
      this.props.clearParticipants();
    }
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id] : target.value });
  };

  render() {
    return (
      <div className={styles.actionContainer}>
        <div className="participant-buttons">
          <button onClick={this.handleAddParticipant}>Add</button>
          <button onClick={this.handleClearParticipants}>Clear</button>
        </div>

        <div className="participants">
          <ul>
            { this.props.participants && !!this.props.participants.length ? this.props.participants.map((participant, i) => (
              <Participant
                key={i}
                participant={participant}
                participantIndex={i}
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
  state => ({ participants: state.participants }),
  {
    loadParticipants,
    addParticipant,
    clearParticipants,
    removeParticipant
  }
)(Action);