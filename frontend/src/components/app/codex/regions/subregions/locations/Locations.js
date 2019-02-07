import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import ContainerHeader from '../../../header/ContainerHeader';
import ContainerRoutes from '../../../routes/ContainerRoutes';
import Location from './Location';
import { getLocations } from './reducers';
import {
  addLocation,
  loadLocations,
  updateLocation,
  deleteLocation
} from './actions';

class Locations extends Component {
  static propTypes = {
    locations: PropTypes.array,
    addLocation: PropTypes.func,
    loadLocations: PropTypes.func,
    updateLocation: PropTypes.func,
    deleteLocation: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadLocations();
  }

  handleCreateLocation = () => {
    this.props.addLocation();
  };

  render() {
    const { handleCreateLocation } = this;
    const { locations, match } = this.props;

    return (
      <Router>
        <Fragment>
          {locations && <ContainerHeader headerChildren={locations} handleCreateChild={handleCreateLocation} path={match.path} /> }
          {locations && <ContainerRoutes data={locations} DataComponent={Location} path={match.path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  state => ({
    locations: getLocations(state)
  }), {
    addLocation,
    loadLocations,
    updateLocation,
    deleteLocation  
  }
)(Locations);
