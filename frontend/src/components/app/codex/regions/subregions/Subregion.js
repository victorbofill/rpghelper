import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../header/Header';
import Routes from '../../routes/Routes';
import Locations from './locations/Locations';
import { api } from '../../../../../services/api';

class Subregion extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  state = {
    locations: [],
  };

  async componentDidMount() {
    const { _id } = this.props.content;
    const locations = await api.getChildren('subregions', _id, 'locations');
    this.setState({ locations });
  }

  handleCreateLocation = async() => {
    const { _id } = this.props.content;
    const { locations } = this.state;
    const newLocation = await api.postData('locations', { subregionId: _id });
    locations.push(newLocation);
    this.setState({ locations });
  };

  render() {
    const { handleCreateLocation } = this;
    const { content } = this.props;
    const { path } = this.props.match;
    const { locations } = this.state;
    
    if(!content) return null;

    return (
      <Fragment>
        <Router>
          <Fragment>
            {locations && <Header path={path} childrenList={locations} handleCreateContainer={handleCreateLocation} /> }
            {locations && <Routes  path={path} childrenList={locations} Component={Subregion} content={content} type={'subregions'}/> }
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default withRouter(Subregion);
