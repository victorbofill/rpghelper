import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Edit from '../edit/Edit';

export default class ComponentRoutes extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
    dataComponents: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    const { child, dataComponents, path, type } = this.props;

    return (
      <Switch>
        {dataComponents && dataComponents.map(dataComponent => {
          const { route, component } = dataComponent;
          return <Route key={component} path={`${path}${route}`} component={component}/>;
        }) }
        {child && <Route path={`${path}/`} render={props => <Edit data={child} type={type} {...props}/>}/>}
      </Switch>
    );
  }
}
