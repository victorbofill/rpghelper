import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Note from './Note';
import { loadNotes, addNote, deleteNote } from './actions';
import { getNotes } from './reducers';

class Notes extends PureComponent {
  static propTypes = {
    notes: PropTypes.array.isRequired,
    loadNotes: PropTypes.func.isRequired,
    addNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
  };

  state = {
    addNoteForm: ''
  };

  componentDidMount() {
    this.props.loadNotes();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote({ note: this.state.addNoteForm });
    this.setState({ addNoteForm: '' });
    this.props.loadNotes();
  };

  handleDelete = id => {
    this.props.deleteNote(id);
  };

  handleChange = ({ target }) => {
    this.setState({ addNoteForm: target.value });
  };

  render() {
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
              handleDelete={this.handleDelete}
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
    loadNotes,
    addNote,
    getNotes,
    deleteNote
  }
)(Notes);