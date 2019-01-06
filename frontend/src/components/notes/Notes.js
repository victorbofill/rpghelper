import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Note from './Note';
import { getNotes } from './reducers';
import {
  addNote,
  loadNotes,
  updateNote,
  deleteNote
} from './actions';

class Notes extends PureComponent {
  static propTypes = {
    addNote: PropTypes.func.isRequired,
    loadNotes: PropTypes.func.isRequired,
    updateNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired
  };

  state = {
    addNoteForm: ''
  };

  componentDidMount() {
    this.props.loadNotes();
  }

  handleChange = ({ target }) => {
    this.setState({ addNoteForm: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addNoteForm } = this.state;

    this.props.addNote({ note: addNoteForm })
      .then(() => {
        this.setState({ addNoteForm: '' });
      });
  };

  handleUpdateNote = note => {
    this.props.updateNote(note);
  };

  handleDeleteNote = id => {
    const { deleteNote } = this.props;
    deleteNote(id);
  };

  render() {
    const { handleChange, handleSubmit, handleDeleteNote, handleUpdateNote } = this;
    const { notes } = this.props;
    if(!notes) return null;

    const { addNoteForm } = this.state;
    
    return (
      <div>
        <h1>Notes</h1>
        <form onSubmit={handleSubmit}>
          <textarea name="addNoteForm" onChange={handleChange} value={addNoteForm} />
          <input type="submit" value="Add Note" />
        </form>
        <ul>
          {notes && !!notes.length ? notes.map((note, i) => (
            <Note
              key={i}
              note={note}
              handleDeleteNote={handleDeleteNote}
              handleUpdateNote={handleUpdateNote}
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
    notes: getNotes(state)
  }),
  {
    addNote,
    loadNotes,
    updateNote,
    deleteNote
  }
)(Notes);