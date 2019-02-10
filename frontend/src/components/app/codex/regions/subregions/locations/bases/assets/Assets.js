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
    parentId: PropTypes.string,
  };

  state = {
    assets: [],
  };

  async componentDidMount() {
    const { parentId } = this.props;
    const assets = await api.getChildren('bases', parentId, 'assets');
    this.setState({ assets });
  }

  handleCreateAsset = async() => {
    const { parentId } = this.props;
    const { assets } = this.state;
    const newAsset = await api.postData('assets', { baseId: parentId });
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
          <p>Assets</p>
          <Header path={path} childrenList={assets} handleCreateNewChild={handleCreateAsset} />
          <Routes path={path} childrenList={assets} Component={Asset} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Assets);
