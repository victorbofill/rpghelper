import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Subregion extends PureComponent {
  static propTypes = {
    subregion: PropTypes.any.isRequired
  };

  render() {
    return (
      <Fragment>
        <h1>Edit Subregion</h1>
      </Fragment>
    );
  }
}

export default connect(
)(Subregion);