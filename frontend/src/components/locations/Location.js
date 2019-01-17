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
    match: PropTypes.object
  };

  render() {
    const { child, match } = this.props;

    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <ComponentHeader childrenTypes={['Bases']} match={match} />
          <ComponentRoutes child={child} dataComponents={[Bases]} match={match}/>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Location));
