import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Details extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired
  };

  render() {
    const { name, description } = this.props.child;

    return (
      <Fragment>
        <h1>{name}</h1>
        <p>{description}</p>
      </Fragment>
    );
  }
}
