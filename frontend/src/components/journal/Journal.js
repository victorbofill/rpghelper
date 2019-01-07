import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Entry from './Entry';
import { getEntries } from './reducers';
import {
  addEntry,
  loadEntries,
  updateEntry,
  deleteEntry
} from './actions';

class Journal extends PureComponent {
  static propTypes = {
    addEntry: PropTypes.func.isRequired,
    loadEntries: PropTypes.func.isRequired,
    updateEntry: PropTypes.func.isRequired,
    deleteEntry: PropTypes.func.isRequired,
    entries: PropTypes.array.isRequired
  };

  state = {
    addEntryForm: ''
  };

  componentDidMount() {
    this.props.loadEntries();
  }

  handleChange = ({ target }) => {
    this.setState({ addEntryForm: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addEntryForm } = this.state;

    this.props.addEntry({ entry: addEntryForm })
      .then(() => {
        this.setState({ addEntryForm: '' });
      });
  };

  handleUpdateEntry = entry => {
    this.props.updateEntry(entry);
  };

  handleDeleteEntry = id => {
    const { deleteEntry } = this.props;
    deleteEntry(id);
  };

  render() {
    const { handleChange, handleSubmit, handleDeleteEntry, handleUpdateEntry } = this;
    const { entries } = this.props;
    if(!entries) return null;

    const { addEntryForm } = this.state;
    
    return (
      <div>
        <h1>Journal</h1>
        <form onSubmit={handleSubmit}>
          <textarea name="addEntryForm" onChange={handleChange} value={addEntryForm} />
          <input type="submit" value="Add Entry" />
        </form>
        <ul>
          {entries && !!entries.length ? entries.map((entry) => (
            <Entry
              key={entry._id}
              entry={entry}
              handleDeleteEntry={handleDeleteEntry}
              handleUpdateEntry={handleUpdateEntry}
            />
          )) : null
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    entries: getEntries(state)
  }),
  {
    addEntry,
    loadEntries,
    updateEntry,
    deleteEntry
  }
)(Journal);