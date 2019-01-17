import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ComponentHeader from '../header/ComponentHeader';
import ComponentRoutes from '../routes/ComponentRoutes';
import Subregions from '../subregions/Subregions';

class Region extends Component {
  static propTypes = {
    child: PropTypes.any.isRequired,
    match: PropTypes.object.isRequired
  };

  render() {
    const { child, match } = this.props;
    
    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <ComponentHeader childrenTypes={['Subregions']} match={match} />
          <ComponentRoutes child={child} dataComponents={[Subregions]} match={match}/>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Region));
