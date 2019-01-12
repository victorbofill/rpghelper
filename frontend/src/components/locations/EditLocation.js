import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateLocation } from './actions';

class EditLocation extends PureComponent {
  static propTypes = {
    locationObject: PropTypes.object.isRequired
  };

  state = {
    url: '',
    name: '',
    description: ''
  };

  componentDidMount = () => {
    const { url, name, description } = this.props.locationObject;

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
    const { _id } = this.props.locationObject;
    const { url, name, description } = this.state;

    const updatedLocation = {
      _id: _id,
      url: url,
      name: name,
      description: description
    };

    updateLocation(updatedLocation);
  };

  render() {
    const { handleChange, handleUpdate } = this;
    const { url, name, description } = this.state;

    return (
      <Fragment>
        <h1>Edit Location</h1>
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
)(EditLocation);