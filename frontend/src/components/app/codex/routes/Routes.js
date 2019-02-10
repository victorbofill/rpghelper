import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Edit from '../edit/Edit';

export default class Routes extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    parentId: PropTypes.string,
    childrenList: PropTypes.array,
    Component: PropTypes.func,
    content: PropTypes.object,
    type: PropTypes.string,
  };

  render() {
    const { path, parentId, childrenList, Component, content, type } = this.props;

    return (
      <Switch>
        {childrenList && childrenList.map(child => {
          const { _id, url } = child;
          return (<Route
            key={_id}
            path={`${path}/${url}`}
            render={() => <Component content={child} parentId={parentId}/>}
          />);
        })}
        {content &&
          <Route
            key={Math.random()}
            exact path={`${path}`}
            render={() => <Edit content={content} type={type} />}
          />
        }
      </Switch>
    );
  }
}
