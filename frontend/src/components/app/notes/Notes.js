import React, { Component } from 'react';

import Note from './Note';
import { api } from '../../../services/api';

export default class Notes extends Component {
  state = {
    notes: [],
    newNoteForm: '',
  };

  async componentDidMount() {
    const notes = await api.getAllData('notes');
    this.setState({ notes });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { notes, newNoteForm } = this.state;
    const newNote = await api.postData('notes', { entry: newNoteForm });

    notes.push(newNote);

    this.setState({ newNoteForm: '', notes });
  };

  handleDeleteNote = id => {
    api.delData('notes', id);

    const { notes } = this.state;
    const deletedNoteIndex = notes.findIndex(note => { return note._id === id; });
    notes.splice(deletedNoteIndex, 1);
    this.setState({ notes });
  };

  render() {
    const { handleChange, handleSubmit, handleDeleteNote } = this;
    const { notes } = this.state;

    if(!notes) return null;

    const { newNoteForm } = this.state;
    
    return (
      <div>
        <h1>Notes</h1>
        <form onSubmit={handleSubmit}>
          <textarea name="newNoteForm" onChange={handleChange} value={newNoteForm} />
          <input type="submit" value="Add Note" />
        </form>

        <ul>
          {notes && !!notes.length ? notes.map(note => (
            <Note
              key={note._id}
              note={note}
              handleDeleteNote={handleDeleteNote}
            />
          )) : null
          }
        </ul>
      </div>
    );
  }
}
