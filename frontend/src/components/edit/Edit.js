import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Edit extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  state = {
    hasSetInitialState: false
  };

  componentDidUpdate(prevProps) {
    // We only want this to run on initial load, but we can't use componentDidMount because data isn't loaded at that point
    if(this.state.hasSetInitialState === false) {
      const { data } = this.props;
      if(data !== prevProps.data) {
        // This will grab each key/value pair in the data and generate a state based on them
        Object.keys(data[0]).map((key, index) => {
          if(key === '__v' || key === '_id') return;
          const value = Object.values(data[0])[index];
          if(typeof value === 'object') return;
          this.setState({ [key]: value });
        });
      }
      this.setState({ hasSetInitialState: true });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { handleChange } = this;
    const { state } = this;

    return (
      <Fragment>
        <h1>Edit</h1>
        <table>
          <tbody>
            {/* This will grab everything out of the state and create a table based on the key/value pairs */}
            {Object.keys(state).map((key, index) => {
              const value = Object.values(state)[index];
              // We don't want this particular item to be rendered
              if(key === 'hasSetInitialState') return;
              return (
                <Fragment key={key}>
                  <tr>
                    <td>{key}</td>
                    <td><input onChange={handleChange} value={value} name={key} /></td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default connect(
)(Edit);