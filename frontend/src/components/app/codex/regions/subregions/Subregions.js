import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ContainerHeader from '../../header/ContainerHeader';
import ContainerRoutes from '../../routes/ContainerRoutes';
import Subregion from './Subregion';
import { getSubregions } from './reducers';
import {
  addSubregion,
  loadSubregions,
  updateSubregion,
  deleteSubregion
} from './actions';

class Subregions extends Component {
  static propTypes = {
    subregions: PropTypes.array,
    addSubregion: PropTypes.func.isRequired,
    loadSubregions: PropTypes.func,
    updateSubregion: PropTypes.func,
    deleteSubregion: PropTypes.func,
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.loadSubregions();
  }

  handleCreateSubregion = () => {
    this.props.addSubregion();
  };

  render() {
    const { handleCreateSubregion } = this;
    const { subregions } = this.props;
    const { path } = this.props.match;

    return (
      <Router>
        <Fragment>
          {subregions && <ContainerHeader headerChildren={subregions} handleCreateChild={handleCreateSubregion} path={path} /> }
          {subregions && <ContainerRoutes data={subregions} DataComponent={Subregion} path={path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  state => ({
    subregions: getSubregions(state)
  }),
  {
    addSubregion,
    loadSubregions,
    updateSubregion,
    deleteSubregion
  }
)(withRouter(Subregions));