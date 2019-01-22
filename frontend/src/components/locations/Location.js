import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ComponentHeader from '../header/ComponentHeader';
import ComponentRoutes from '../routes/ComponentRoutes';
import Bases from '../bases/Bases';

class Location extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired
  };

  render() {
    const { child, path } = this.props;

    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <ComponentHeader childrenTypes={['Bases']} path={path} />
          <ComponentRoutes child={child} dataComponents={[Bases]} path={path}/>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Location));
