import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../header/Header';
import Region from './Region';
import Routes from '../routes/Routes';
import { getRegions } from './reducers';
import {
  addRegion,
  loadRegions,
  updateRegion,
  deleteRegion
} from './actions';

import styles from './Regions.css';

class Regions extends PureComponent {
  static propTypes = {
    addRegion: PropTypes.func,
    loadRegions: PropTypes.func,
    updateRegion: PropTypes.func,
    deleteRegion: PropTypes.func,
    regions: PropTypes.array,
    match: PropTypes.object
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
        <div>
          {regions && <Header headerChildren={regions} handleCreateChild={handleCreateRegion} path={match.path} /> }

          <div>
            <h1>Regions</h1>
            {regions && <Routes data={regions} Component={Region} path={match.path} /> }
          </div>
        </div>
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