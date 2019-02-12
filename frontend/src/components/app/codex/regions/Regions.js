import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../shared/header/Header';
import Routes from '../../shared/routes/Routes';
import Region from './Region';
import { api } from '../../../../services/api';

class Regions extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state= {
    regions: []
  };

  async componentDidMount() {
    const regions = await api.getAllData('regions');
    this.setState({ regions });
  }

  handleCreateRegion = async() => {
    const { regions } = this.state;
    const newRegion = await api.postData('regions');
    regions.push(newRegion);
    this.setState({ regions });
  };

  render() {
    const { handleCreateRegion } = this;
    const { path } = this.props.match;
    const { regions } = this.state;

    return (
      <Router>
        <Fragment>
          <Header path={path} childrenList={regions} handleCreateNewChild={handleCreateRegion} />
          <Routes  path={path} childrenList={regions} Component={Region} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Regions);