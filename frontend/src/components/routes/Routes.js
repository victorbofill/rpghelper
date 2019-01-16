import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Routes extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    Component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
  };

  render() {
    const { data, Component, path } = this.props;

    return (
      <Switch>
        {data && data.map(child => (<Route key={child._id} path={`${path}/${child.url}`} render={() => <Component child={child} />}/>))}
      </Switch>
    );
  }
}
