import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../../../header/Header';
import Routes from '../../../../routes/Routes';
import Assets from './assets/Assets';
import NPCs from './NPCs/NPCs';

class Base extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  render() {
    const { child } = this.props;
    const { path } = this.props.match;

    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <Header contentTypes={['Assets', 'NPCs']} path={path} />
          <Routes child={child} type='bases' dataComponents={[{ route: '/assets', component: Assets }, { route: '/npcs', component: NPCs }]} path={path}/>
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Base);
