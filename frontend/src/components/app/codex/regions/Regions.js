import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Routes from '../routes/Routes';
import Header from '../header/Header';
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
    const { match } = this.props;
    const { regions } = this.state;

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

export default withRouter(Regions);