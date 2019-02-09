import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../../header/Header';
import Routes from '../../../routes/Routes';
import Location from './Location';
import { api } from '../../../../../../services/api';

class Locations extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    locations: []
  };

  async componentDidMount() {
    const locations = await api.getAllData('locations');
    this.setState({ locations });
  }

  handleCreateLocation = async() => {
    const { locations } = this.state;
    const newSubregion = await api.postData('locations');
    locations.push(newSubregion);
    this.setState({ locations });
  };

  render() {
    const { handleCreateLocation } = this;
    const { path } = this.props.match;
    const { locations } = this.state;

    return (
      <Router>
        <Fragment>
          {locations && <Header headerChildren={locations} handleCreateChild={handleCreateLocation} path={path} /> }
          {locations && <Routes data={locations} dataComponents={[Location]} path={path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Locations);