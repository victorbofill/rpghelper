import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import ContainerHeader from '../../../../../header/ContainerHeader';
import ContainerRoutes from '../../../../../routes/ContainerRoutes';
import NPC from './NPC';
import { getNPCs } from './reducers';
import {
  addNPC,
  loadNPCs,
  updateNPC,
  deleteNPC
} from './actions';

class NPCs extends Component {
  static propTypes = {
    NPCs: PropTypes.array,
    addNPC: PropTypes.func,
    loadNPCs: PropTypes.func,
    updateNPC: PropTypes.func,
    deleteNPC: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadNPCs();
  }

  handleCreateNPC = () => {
    this.props.addNPC();
  };
  
  render() {
    const { handleCreateNPC } = this;
    const { NPCs, match } = this.props;

    return (
      <Router>
        <Fragment>
          {NPCs && <ContainerHeader headerChildren={NPCs} handleCreateChild={handleCreateNPC} path={match.path} /> }
          {NPCs && <ContainerRoutes data={NPCs} DataComponent={NPC} path={match.path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default connect(
  state => ({
    NPCs: getNPCs(state)
  }), {
    addNPC,
    loadNPCs,
    updateNPC,
    deleteNPC  
  }
)(NPCs);
