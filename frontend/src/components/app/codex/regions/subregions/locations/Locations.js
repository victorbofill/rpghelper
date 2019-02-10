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
    parentId: PropTypes.string,
  };

  state = {
    locations: []
  };

  async componentDidMount() {
    const { parentId } = this.props;
    const locations = await api.getChildren('subregions', parentId, 'locations');
    this.setState({ locations });
  }

  handleCreateLocation = async() => {
    const { parentId } = this.props;
    const { locations } = this.state;
    const newLocation = await api.postData('locations', { subregionId: parentId });
    locations.push(newLocation);
    this.setState({ locations });
  };

  render() {
    const { handleCreateLocation } = this;
    const { path } = this.props.match;
    const { locations } = this.state;

    return (
      <Router>
        <Fragment>
          <p>Locations</p>
          <Header path={path} childrenList={locations} handleCreateNewChild={handleCreateLocation} />
          <Routes path={path} childrenList={locations} Component={Location} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Locations);