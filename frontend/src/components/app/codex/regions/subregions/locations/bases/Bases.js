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
    parentId: PropTypes.string,
  };

  state = {
    bases: [],
  };

  async componentDidMount() {
    const { parentId } = this.props;
    const bases = await api.getChildren('locations', parentId, 'bases');
    this.setState({ bases });
  }

  handleCreateBase = async() => {
    const { parentId } = this.props;
    const { bases } = this.state;
    const newBase = await api.postData('bases', { locationId: parentId });
    bases.push(newBase);
    this.setState({ bases });
  };
  
  render() {
    const { handleCreateBase } = this;
    const { path } = this.props.match;
    const { bases } = this.state;

    return (
      <Router>
        <Fragment>
          <p>Bases</p>
          <Header path={path} childrenList={bases} handleCreateNewChild={handleCreateBase} />
          <Routes path={path} childrenList={bases} Component={Base} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Bases);