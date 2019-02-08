import React, { Component } from 'react';

import Entry from './Entry';
import { api } from '../../../services/api';

export default class Journal extends Component {
  state = {
    entries: [],
    newEntryForm: '',
  };

  async componentDidMount() {
    const entries = await api.getAllData('entries');
    this.setState({ entries });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const { entries, newEntryForm } = this.state;
    const newEntry = await api.postData('entries', { entry: newEntryForm });

    entries.push(newEntry);

    this.setState({ newEntryForm: '', entries });
  };

  handleDeleteEntry = id => {
    api.delData('entries', id);

    const { entries } = this.state;
    const deletedEntryIndex = entries.findIndex(entry => { return entry._id === id; });
    entries.splice(deletedEntryIndex, 1);
    this.setState({ entries });
  };

  render() {
    const { handleChange, handleSubmit, handleDeleteEntry } = this;
    const { entries } = this.state;
    if(!entries) return null;

    const { newEntryForm } = this.state;
    
    return (
      <div>
        <h1>Journal</h1>
        <form onSubmit={handleSubmit}>
          <textarea name="newEntryForm" onChange={handleChange} value={newEntryForm} />
          <input type="submit" value="Add Entry" />
        </form>

        <ul>
          {entries && !!entries.length ? entries.map((entry) => (
            <Entry
              key={entry._id}
              entry={entry}
              handleDeleteEntry={handleDeleteEntry}
            />
          )) : null
          }
        </ul>
      </div>
    );
  }
}
