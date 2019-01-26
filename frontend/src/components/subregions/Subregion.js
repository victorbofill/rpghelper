import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ComponentHeader from '../header/ComponentHeader';
import ComponentRoutes from '../routes/ComponentRoutes';
import Locations from '../locations/Locations';

class Subregion extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  render() {
    const { child } = this.props;
    const { path } = this.props.match;

    if(!child) return null;
    
    return (
      <Router>
        <Fragment>
          <ComponentHeader childrenTypes={['Locations']} path={path} />
          <ComponentRoutes child={child} type='subregions' dataComponents={[{ route: '/locations', component: Locations }]} path={path}/>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Subregion));
