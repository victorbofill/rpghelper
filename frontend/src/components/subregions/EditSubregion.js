import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateSubregion } from './actions';

class EditSubregion extends Component {
  static propTypes = {
    subregion: PropTypes.object.isRequired
  };

  state = {
    url: '',
    name: '',
    description: ''
  };

  componentDidMount = () => {
    const { url, name, description } = this.props.subregion;

    this.setState({
      url: url,
      name: name,
      description: description
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleUpdate = () => {
    const { _id } = this.props.subregion;
    const { url, name, description } = this.state;

    const updatedSubregion = {
      _id: _id,
      url: url,
      name: name,
      description: description
    };

    updateSubregion(updatedSubregion);
  };

  render() {
    const { handleChange, handleUpdate } = this;
    const { url, name, description } = this.state;

    return (
      <Fragment>
        <h1>Edit Subregion</h1>
        <label>Url: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="url" value={url} />
        <label>Name: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="name" value={name} />
        <label>Description: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="description" value={description} />
      </Fragment>
    );
  }
}

export default connect(
)(EditSubregion);