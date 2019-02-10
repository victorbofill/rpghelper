import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../header/Header';
import Routes from '../../routes/Routes';
import Locations from './locations/Locations';

class Subregion extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  childrenList = [{
    _id: Math.random(),
    url: 'locations',
    name: 'Locations',
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
          <Routes path={path} childrenList={childrenList} Component={Locations} content={content} type={'subregions'} parentId={_id} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Subregion);
