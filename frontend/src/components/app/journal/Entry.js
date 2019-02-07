import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Entries.css';

class Entry extends Component {
  static propTypes = {
    handleDeleteEntry: PropTypes.func,
    handleUpdateEntry: PropTypes.func,
    entry: PropTypes.any,
  };

  state = {
    isEditing: false,
    entry: ''
  };

  componentDidMount() {
    const { entry } = this.props.entry;
    this.setState({ entry: entry });
  }

  toggleEditing = () => {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  };

  cancelEdits = () => {
    const { entry } = this.props.entry;
    this.setState({ entry: entry });

    this.toggleEditing();
  };  

  submitEdits = () => {
    const { handleUpdateEntry } = this.props;
    const { _id } = this.props.entry;
    const { entry } = this.state;

    const newEntry = {
      _id: _id,
      entry: entry
    };

    handleUpdateEntry(newEntry);
    this.toggleEditing();
  };  

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { toggleEditing, handleChange, cancelEdits, submitEdits } = this;
    const { handleDeleteEntry } = this.props;
    const { _id } = this.props.entry;
    const { entry, isEditing } = this.state;

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
            <textarea name="entry" onChange={handleChange} value={entry} />
          }
        </main>
      </div>
    );
  }
}

export default connect(
)(Entry);