import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../header/Header';
import Routes from '../routes/Routes';
import Subregions from './subregions/Subregions';

class Region extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  childrenList = [{
    _id: Math.random(),
    url: 'Subregions',
  }];

  render() {
    const { content } = this.props;
    const { path } = this.props.match;
    
    if(!content) return null;

    const { _id } = content;

    return (
      <Router>
        <Fragment>
          <p>Region</p>
          <Header
            path={path}
            childrenList={[{
              name: 'Subregions',
              url: 'subregions',
              _id: Math.random(),
            }]}/>
          <Routes 
            path={path}
            content={content}
            type={'regions'}
            Component={Subregions}
            parentId={_id}
          />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Region);
