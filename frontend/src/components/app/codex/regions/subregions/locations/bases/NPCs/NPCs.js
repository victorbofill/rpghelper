import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../../../../header/Header';
import Routes from '../../../../../routes/Routes';
import NPC from './NPC';
import { api } from '../../../../../../../../services/api';

class NPCs extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    NPCs: [],
  };

  async componentDidMount() {
    const NPCs = await api.getAllData('NPCs');
    this.setState({ NPCs });
  }

  handleCreateNPC = async() => {
    const { NPCs } = this.state;
    const newNPC = await api.postData('NPCs');
    NPCs.push(newNPC);
    this.setState({ NPCs });
  };
  
  render() {
    const { handleCreateNPC } = this;
    const { path } = this.props.match;
    const { NPCs } = this.state;

    return (
      <Router>
        <Fragment>
          {NPCs && <Header containers={NPCs} handleCreateContainer={handleCreateNPC} path={path} /> }
          {NPCs && <Routes data={NPCs} DataComponent={NPC} path={path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(NPCs);
