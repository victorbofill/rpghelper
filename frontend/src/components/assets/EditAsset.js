import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateAsset } from './actions';

class EditAsset extends PureComponent {
  static propTypes = {
    asset: PropTypes.object.isRequired
  };

  state = {
    url: '',
    name: '',
    description: ''
  };

  componentDidMount = () => {
    const { url, name, description } = this.props.asset;

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
    const { _id } = this.props.asset;
    const { url, name, description } = this.state;

    const updatedAsset = {
      _id: _id,
      url: url,
      name: name,
      description: description
    };

    updateAsset(updatedAsset);
  };

  render() {
    const { handleChange, handleUpdate } = this;
    const { url, name, description } = this.state;

    return (
      <Fragment>
        <h1>Edit Asset</h1>
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
)(EditAsset);