import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Notes.css';

class Note extends Component {
  static propTypes = {
    handleDeleteNote: PropTypes.func,
    handleUpdateNote: PropTypes.func,
    note: PropTypes.any,
  };

  state = {
    isEditing: false,
    note: ''
  };

  componentDidMount() {
    const { note } = this.props.note;
    this.setState({ note: note });
  }

  toggleEditing = () => {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  };

  cancelEdits = () => {
    const { note } = this.props.note;
    this.setState({ note: note });

    this.toggleEditing();
  };  

  submitEdits = () => {
    const { handleUpdateNote } = this.props;
    const { _id } = this.props.note;
    const { note } = this.state;

    const newNote = {
      _id: _id,
      note: note
    };

    handleUpdateNote(newNote);
    this.toggleEditing();
  };  

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { toggleEditing, handleChange, cancelEdits, submitEdits } = this;
    const { handleDeleteNote } = this.props;
    const { _id } = this.props.note;
    const { note, isEditing } = this.state;

    return (
      <div className={styles.note}>
        <header className="header">
          <h3>Note</h3>
          <div>
            {!isEditing &&
              <button onClick={toggleEditing}>Edit</button>
            }
            {isEditing &&
              <div>
                <button onClick={submitEdits}>Submit</button>
                <button onClick={cancelEdits}>Cancel</button>
              </div>
            }
            <button onClick={() => handleDeleteNote(_id)}>X</button>
          </div>
        </header>
        <main>
          {!isEditing &&
            <p>{note}</p>
          }
          {isEditing &&
            <textarea name="note" onChange={handleChange} value={note} />
          }
        </main>
      </div>
    );
  }
}

export default connect(
)(Note);