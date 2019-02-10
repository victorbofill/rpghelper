import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../header/Header';
import Routes from '../../routes/Routes';
import Subregion from './Subregion';
import { api } from '../../../../../services/api';

class Subregions extends Component {
  static propTypes = {
    match: PropTypes.object,
    parentId: PropTypes.string,
  };

  state = {
    subregions: [],
  };

  async componentDidMount() {
    const subregions = await api.getAllData('subregions');
    this.setState({ subregions });
  }

  handleCreateSubregion = async() => {
    const { parentId } = this.props;
    const { subregions } = this.state;
    const newSubregion = await api.postData('subregions', { regionId: parentId });
    subregions.push(newSubregion);
    this.setState({ subregions });
  };


  render() {
    const { handleCreateSubregion } = this;
    const { path } = this.props.match;
    const { subregions } = this.state;

    return (
      <Router>
        <Fragment>
          <p>Subregions</p>
          {subregions && <Header path={path} childrenList={subregions} handleCreateNewChild={handleCreateSubregion} /> }
          {subregions && <Routes path={path} childrenList={subregions} Component={Subregion} /> }
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Subregions);