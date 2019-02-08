import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { api } from '../../../services/api';

import styles from './Entries.css';

export default class Entry extends Component {
  static propTypes = {
    entry: PropTypes.any,
    handleDeleteEntry: PropTypes.func,
  };

  state = {
    isEditing: false,
    entryEdits: ''
  };

  componentDidMount() {
    const { entry } = this.props.entry;
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
    const { entry } = this.props.entry;
    this.setState({ entryEdits: entry, isEditing: false });
  };    

  submitEdits = async() => {
    const { entry } = this.props;
    const { entryEdits } = this.state;
    entry.entry = entryEdits;
    const { updatedEntry } = await api.putData('entries', entry);
    this.setState({ entry: updatedEntry, isEditing: false });
  };

  render() {
    const { toggleEditing, handleChange, cancelEdits, submitEdits } = this;
    const { handleDeleteEntry } = this.props;
    const { entry, _id } = this.props.entry;
    const { isEditing, entryEdits } = this.state;

    return (
      <div className={styles.entry}>
        <header className="header">
          <h3>Entry</h3>
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
            <button onClick={() => handleDeleteEntry(_id)}>X</button>
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
