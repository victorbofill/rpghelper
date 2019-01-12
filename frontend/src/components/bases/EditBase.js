import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateBase } from './actions';

class EditBase extends PureComponent {
  static propTypes = {
    base: PropTypes.object.isRequired
  };

  state = {
    url: '',
    name: '',
    description: ''
  };

  componentDidMount = () => {
    const { url, name, description } = this.props.base;

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
    const { _id } = this.props.base;
    const { url, name, description } = this.state;

    const updatedBase = {
      _id: _id,
      url: url,
      name: name,
      description: description
    };

    updateBase(updatedBase);
  };

  render() {
    const { handleChange, handleUpdate } = this;
    const { url, name, description } = this.state;

    return (
      <Fragment>
        <h1>Edit Base</h1>
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
)(EditBase);