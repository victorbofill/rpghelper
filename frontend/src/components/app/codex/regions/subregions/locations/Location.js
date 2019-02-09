import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../../header/Header';
import Routes from '../../../routes/Routes';
import Bases from './bases/Bases';

class Location extends Component {
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
          <Header contentTypes={['Bases']} path={path} />
          <Routes child={child} type='locations' dataComponents={[{ route: '/bases', component: Bases }]} path={path}/>
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Location);
