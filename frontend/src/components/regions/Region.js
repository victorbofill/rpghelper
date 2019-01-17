import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ComponentHeader from '../header/ComponentHeader';
import ComponentRoutes from '../routes/ComponentRoutes';
// import EditRegion from './EditRegion';
import Subregions from '../subregions/Subregions';

class Region extends Component {
  static propTypes = {
    child: PropTypes.any.isRequired
  };

  render() {
    const { child } = this.props;
    
    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <ComponentHeader child={child} childType={'Subregions'}/>
          <ComponentRoutes child={child} dataComponent={Subregions}/>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(withRouter(Region));

class RegionDetails extends Component {
  static propTypes = {
    region: PropTypes.object.isRequired
  };

  render() {
    const { name, description } = this.props.region;

    return (
      <Fragment>
        <h1>{name}</h1>
        <p>{description}</p>
      </Fragment>
    );
  }
}
