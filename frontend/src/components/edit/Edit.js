import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Edit extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired
  };

  state = {};

  componentDidMount() {
    const { data } = this.props;
    // This will grab each key/value pair in the data and generate a state based on them
    Object.keys(data).map((key, index) => {
      if(key === '__v' || key === '_id') return;
      const value = Object.values(data)[index];
      if(typeof value === 'object') return;
      this.setState({ [key]: value });
    });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleUpdateData = ({ target }) => {
    const { _id } = this.props.data;
    const { type } = this.props;
    const { value } = target;

    console.log('id: ', _id);
    console.log('type: ', type);
    console.log('value: ', value);
  };

  render() {
    const { handleChange, handleUpdateData } = this;
    const { state } = this;

    return (
      <Fragment>
        <table>
          <tbody>
            {/* This will grab everything out of the state and create a table based on the key/value pairs */}
            {Object.keys(state).map((key, index) => {
              const value = Object.values(state)[index];
              // We don't want this particular item to be rendered
              return (
                <Fragment key={key}>
                  <tr>
                    <td>{key}</td>
                    <td><input onBlur={handleUpdateData} onChange={handleChange} value={value} name={key} /></td>
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