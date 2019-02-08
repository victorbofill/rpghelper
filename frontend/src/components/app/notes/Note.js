import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { api } from '../../../services/api';

import styles from './Notes.css';

export default class Note extends Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
    handleDeleteNote: PropTypes.func.isRequired,
  };

  state = {
    isEditing: false,
    entryEdits: '',
  };

  componentDidMount() {
    const { entry } = this.props.note;
    this.setState({ entryEdits: entry });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  toggleEditing = () => {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  };

  cancelEdits = () => {
    const { entry } = this.props.note;
    this.setState({ entryEdits: entry, isEditing: false });
  };

  submitEdits = async() => {
    const { note } = this.props;
    const { entryEdits } = this.state;
    note.entry = entryEdits;
    const { entry } = await api.putData('notes', note);
    this.setState({ entry: entry, isEditing: false });
  };    

  render() {
    const { toggleEditing, handleChange, cancelEdits, submitEdits } = this;
    const { handleDeleteNote } = this.props;
    const { entry, _id } = this.props.note;
    const { isEditing, entryEdits } = this.state;

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
            <p>{entry}</p>
          }
          {isEditing &&
            <textarea name="entryEdits" onChange={handleChange} value={entryEdits} />
          }
        </main>
      </div>
    );
  }
}
