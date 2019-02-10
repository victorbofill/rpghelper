import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../../header/Header';
import Routes from '../../../routes/Routes';
import Bases from './bases/Bases';

class Location extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  childrenList = [{
    _id: Math.random(),
    url: 'bases',
    name: 'Bases',
  }];

  render() {
    const { childrenList } = this;
    const { content } = this.props;
    const { path } = this.props.match;

    if(!content) return null;

    const { _id } = content;

    return (
      <Router>
        <Fragment>
          <p>Location</p>
          <Header path={path} childrenList={childrenList}/>
          <Routes path={path} childrenList={childrenList} Component={Bases} content={content} type={'locations'} parentId={_id} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Location);
