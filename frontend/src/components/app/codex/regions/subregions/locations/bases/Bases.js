import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Base from './Base';
import Header from '../../../../header/Header';
import Routes from '../../../../routes/Routes';
import { api } from '../../../../../../../services/api';

class Bases extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    bases: [],
  };

  async componentDidMount() {
    const bases = await api.getAllData('bases');
    this.setState({ bases });
  }

  handleCreateBase = async() => {
    const { bases } = this.state;
    const newBase = await api.postData('bases');
    bases.push(newBase);
    this.setState({ bases });
  };
  
  render() {
    const { handleCreateBase } = this;
    const { match } = this.props;
    const { bases } = this.state;

    return (
      <Router>
        <Fragment>
          {bases && <Header headerChildren={bases} handleCreateChild={handleCreateBase} path={match.path} /> }
          {bases && <Routes data={bases} dataComponents={[Base]} path={match.path} /> }
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Bases);