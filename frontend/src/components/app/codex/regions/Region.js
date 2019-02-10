import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../header/Header';
import Routes from '../routes/Routes';
import Subregion from './subregions/Subregions';
import { api } from '../../../../services/api';

class Region extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  state = {
    subregions: [],
  };

  async componentDidMount() {
    const { _id } = this.props.content;
    const subregions = await api.getChildren('regions', _id, 'subregions');
    this.setState({ subregions });
  }

  handleCreateSubregion = async() => {
    const { _id } = this.props.content;
    const { subregions } = this.state;
    const newSubregion = await api.postData('subregions', { regionId: _id });
    subregions.push(newSubregion);
    this.setState({ subregions });
  };

  render() {
    const { handleCreateSubregion } = this;
    const { content } = this.props;
    const { path } = this.props.match;
    const { subregions } = this.state;
    
    if(!content) return null;

    return (
      <Fragment>
        <Router>
          <Fragment>
            {subregions && <Header path={path} childrenList={subregions} handleCreateContainer={handleCreateSubregion} /> }
            {subregions && <Routes  path={path} childrenList={subregions} Component={Subregion} /> }
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default withRouter(Region);
