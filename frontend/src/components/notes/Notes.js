import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Note from './Note';
import { getNotes } from './reducers';
import {
  addNote,
  loadNotes,
  deleteNote
} from './actions';

class Notes extends PureComponent {
  static propTypes = {
    addNote: PropTypes.func.isRequired,
    loadNotes: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired,
    notes: PropTypes.array.isRequired
  };

  state = {
    addNoteForm: ''
  };

  componentDidMount() {
    this.props.loadNotes();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { addNote } = this.props;
    const { addNoteForm } = this.state;

    addNote({ note: addNoteForm });
    this.setState({ addNoteForm: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ addNoteForm: target.value });
  };

  handleDeleteNote = id => {
    const { deleteNote } = this.props;
    deleteNote(id);
  };

  render() {
    const { handleDeleteNote } = this;
    const { notes } = this.props;
    if(!notes) return null;

    const { addNoteForm } = this.state;
    
    return (
      <div>
        <h1>Notes</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea name="addNoteForm" onChange={this.handleChange} value={addNoteForm} />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {notes && !!notes.length ? notes.map((note, i) => (
            <Note
              key={i}
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

export default connect(
  state => ({
    notes: getNotes(state)
  }),
  {
    addNote,
    loadNotes,
    deleteNote
  }
)(Notes);