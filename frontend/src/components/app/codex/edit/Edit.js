import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { parseDatabaseObject } from '../../../../actions/edit';
import { api } from '../../../../services/api';

class Edit extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    type: PropTypes.string
  };

  state = {};

  async componentDidMount() {
    const { content } = this.props;

    const updatedData = parseDatabaseObject(content);
    this.setState({ ...updatedData });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleUpdateData = ({ target }) => {
    const { _id } = this.props.content;
    const { type } = this.props;
    const updatedData = { _id, [target.name]: target.value };

    api.putData(type, updatedData);
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

export default Edit;