import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateRegion } from './actions';

class EditRegion extends PureComponent {
  static propTypes = {
    region: PropTypes.object.isRequired
  };

  state = {
    name: '',
    url: ''
  };

  componentDidMount = () => {
    const { name, url } = this.props.region;
    this.setState({ name: name, url: url });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleUpdate = () => {
    const { name, url } = this.state;
    const { _id } = this.props.region;
    const updatedRegion = { _id: _id, name: name, url: url };
    updateRegion(updatedRegion);
  };

  render() {
    const { handleChange, handleUpdate } = this;
    const { name, url } = this.state;

    return (
      <Fragment>
        <h1>Edit Region</h1>
        <label>Name: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="name" value={name} />
        <label>URL: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="url" value={url} />
      </Fragment>
    );
  }
}

export default connect(
)(EditRegion);