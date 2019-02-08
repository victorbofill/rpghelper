import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Routes from '../routes/Routes';
import Header from '../header/Header';
import Region from './Region';
import { getRegions } from './reducers';
import {
  addRegion,
  loadRegions,
  updateRegion,
  deleteRegion
} from './actions';

class Regions extends Component {
  static propTypes = {
    addRegion: PropTypes.func,
    loadRegions: PropTypes.func,
    updateRegion: PropTypes.func,
    deleteRegion: PropTypes.func,
    regions: PropTypes.array,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.loadRegions();
  }

  handleCreateRegion = () => {
    this.props.addRegion();
  };

  render() {
    const { handleCreateRegion } = this;
    const { regions, match } = this.props;

    return (
      <Router>
        <Fragment>
          {regions && <Header headerChildren={regions} handleCreateChild={handleCreateRegion} path={match.path} /> }
          {regions && <Routes data={regions} dataComponents={[Region]} path={match.path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  state => ({
    regions: getRegions(state)
  }),
  {
    addRegion,
    loadRegions,
    updateRegion,
    deleteRegion
  }
)(withRouter(Regions));