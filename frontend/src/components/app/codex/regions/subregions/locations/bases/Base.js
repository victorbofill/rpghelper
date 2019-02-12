import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../../../../shared/header/Header';
import Routes from '../../../../../shared/routes/Routes';
import Assets from './assets/Assets';
import NPCs from './NPCs/NPCs';

class Base extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  childrenList = [
    {
      _id: Math.random(),
      url: 'assets',
      name: 'Assets',
      Component: Assets,
    },
    {
      _id: Math.random(),
      url: 'npcs',
      name: 'NPCs',
      Component: NPCs,
    }
  ];

  render() {
    const { childrenList } = this;
    const { content } = this.props;
    const { path } = this.props.match;

    if(!content) return null;

    const { _id } = content;

    return (
      <Router>
        <Fragment>
          <Header path={path} childrenList={childrenList} />
          <Routes path={path} childrenList={childrenList} type={'bases'} parentId={_id} content={content} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Base);
