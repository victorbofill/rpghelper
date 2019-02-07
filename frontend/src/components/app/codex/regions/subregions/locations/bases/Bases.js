import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Base from './Base';
import ContainerHeader from '../../../../header/ContainerHeader';
import ContainerRoutes from '../../../../routes/ContainerRoutes';
import { getBases } from './reducers';
import {
  addBase,
  loadBases,
  updateBase,
  deleteBase
} from './actions';

class Bases extends Component {
  static propTypes = {
    bases: PropTypes.array,
    addBase: PropTypes.func,
    loadBases: PropTypes.func,
    updateBase: PropTypes.func,
    deleteBase: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadBases();
  }

  handleCreateBase = () => {
    this.props.addBase();
  };
  
  render() {
    const { handleCreateBase } = this;
    const { bases, match } = this.props;

    return (
      <Router>
        <Fragment>
          {bases && <ContainerHeader headerChildren={bases} handleCreateChild={handleCreateBase} path={match.path} /> }
          {bases && <ContainerRoutes data={bases} DataComponent={Base} path={match.path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  state => ({
    bases: getBases(state)
  }), {
    addBase,
    loadBases,
    updateBase,
    deleteBase  
  }
)(Bases);
