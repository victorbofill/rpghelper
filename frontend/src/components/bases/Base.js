import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ComponentHeader from '../header/ComponentHeader';
import ComponentRoutes from '../routes/ComponentRoutes';
import Assets from '../assets/Assets';
import NPCs from '../NPCs/NPCs';

class Base extends Component {
  static propTypes = {
    child: PropTypes.object,
    match: PropTypes.object
  };

  render() {
    const { child, match } = this.props;

    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <ComponentHeader childrenTypes={['Assets', 'NPCs']} match={match} />
          <ComponentRoutes child={child} dataComponents={[Assets, NPCs]} match={match}/>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Base));
