import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';
import { connect } from 'react-redux';
import { loadEntries, addEntry, deleteEntry } from './actions';
import { getEntries } from './reducers';

class Journal extends PureComponent {
  static propTypes = {
    entries: PropTypes.array,
    loadEntries: PropTypes.func.isRequired,
    addEntry: PropTypes.func.isRequired,
    deleteEntry: PropTypes.func.isRequired
  };

  state = {
    addEntryForm: ''
  };

  componentDidMount() {
    this.props.loadEntries();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addEntry({ entry: this.state.addEntryForm });
    this.setState({ addEntryForm: '' });
    this.props.loadEntries();
  };

  handleDelete = id => {
    this.props.deleteEntry(id);
  };

  handleChange = ({ target }) => {
    this.setState({ addEntryForm: target.value });
  };

  render() {
    const { entries } = this.props;
    if(!entries) return null;

    const { addEntryForm } = this.state;
    
    return (
      <div>
        <h1>Journal</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea name="addEntryForm" onChange={this.handleChange} value={addEntryForm} />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {entries && !!entries.length ? entries.map((entry, i) => (
            <Entry
              key={i}
              entry={entry}
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
    entries: getEntries(state)
  }),
  {
    loadEntries,
    addEntry,
    getEntries,
    deleteEntry
  }
)(Journal);