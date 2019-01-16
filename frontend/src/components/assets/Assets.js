import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Asset from './Asset';
import ContainerHeader from '../header/ContainerHeader';
import Routes from '../routes/Routes';
import { getAssets } from './reducers';
import {
  addAsset,
  loadAssets,
  updateAsset,
  deleteAsset
} from './actions';

class Assets extends Component {
  static propTypes = {
    assets: PropTypes.array,
    addAsset: PropTypes.func,
    loadAssets: PropTypes.func,
    updateAssets: PropTypes.func,
    deleteAssets: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadAssets();
  }

  handleCreateAsset = () => {
    this.props.addAsset();
  };

  render() {
    const { handleCreateAsset } = this;
    const { assets, match } = this.props;

    return (
      <Router>
        <Fragment>
          {assets && <ContainerHeader headerChildren={assets} handleCreateChild={handleCreateAsset} path={match.path} /> }
          {assets && <Routes data={assets} DataComponent={Asset} path={match.path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  state => ({
    assets: getAssets(state)
  }), {
    addAsset,
    loadAssets,
    updateAsset,
    deleteAsset  
  }
)(Assets);
