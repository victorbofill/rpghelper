import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../shared/header/Header';
import Routes from '../../shared/routes/Routes';
import Subregions from './subregions/Subregions';

class Region extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  childrenList = [{
    _id: Math.random(),
    url: 'subregions',
    name: 'Subregions',
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
          <Header path={path} childrenList={childrenList}/>
          <Routes path={path} childrenList={childrenList} Component={Subregions} content={content} type={'regions'} parentId={_id} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Region);
