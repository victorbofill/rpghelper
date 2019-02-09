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
    const { match } = this.props;
    const { NPCs } = this.state;

    return (
      <Router>
        <Fragment>
          {NPCs && <Header headerChildren={NPCs} handleCreateChild={handleCreateNPC} path={match.path} /> }
          {NPCs && <Routes data={NPCs} dataComponents={[NPC]} path={match.path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(NPCs);
