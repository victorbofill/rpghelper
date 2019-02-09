import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Asset from './Asset';
import Header from '../../../../../header/Header';
import Routes from '../../../../../routes/Routes';
import { api } from '../../../../../../../../services/api';

class Assets extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    assets: [],
  };

  async componentDidMount() {
    const assets = await api.getAllData('assets');
    this.setState({ assets });
  }

  handleCreateAsset = async() => {
    const { assets } = this.state;
    const newAsset = await api.postData('assets');
    assets.push(newAsset);
    this.setState({ assets });
  };

  render() {
    const { handleCreateAsset } = this;
    const { path } = this.props.match;
    const { assets } = this.state;

    return (
      <Router>
        <Fragment>
          {assets && <Header containers={assets} handleCreateContainer={handleCreateAsset} path={path} /> }
          {assets && <Routes data={assets} DataComponent={Asset} path={path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Assets);
