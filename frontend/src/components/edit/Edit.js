import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { update } from './actions';

class Edit extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  componentDidMount = () => {
    console.log('data'); // TODO grab everything out of data and display it
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleUpdate = () => {
    update(); //TODO grab all the data and send it to the server
  };

  render() {
    const { handleChange, handleUpdate } = this;
    const { data } = this.props;

    return (
      <Fragment>
        <h1>Edit Region</h1>
        {data.map(data => {
          return <Property key={data} handleChange={handleChange} handleUpdate={handleUpdate}/>;
        })}
      </Fragment>
    );
  }
}

export default connect(
)(Edit);

class Property extends PureComponent {
  static propTypes = {
    property: PropTypes.any,
    handleChange: PropTypes.func,
    handleUpdate: PropTypes.func
  };

  state = {
    property: ''
  };

  render() {
    const { handleChange, handleUpdate } = this.props;
    const { property } = this.state;

    return (
      <Fragment>
        <label>{property}: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name={`${property}`} value={property} />
      </Fragment>
    );
  }
}