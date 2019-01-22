import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Details from '../details/Details';

export default class ComponentRoutes extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
    dataComponents: PropTypes.array.isRequired,
    path: PropTypes.string.isRequired
  };

  render() {
    const { child, dataComponents, path } = this.props;

    return (
      <Switch>
        <Route exact path={`${path}/`} render={props => <Details child={child} {...props} />}/>
        {dataComponents && dataComponents.map(dataComponent => {
          const { route, component } = dataComponent;
          return <Route key={component} path={`${path}${route}`} component={component}/>;
        }) }
        {/* <Route path={`${match.path}/edit`} render={props => <Edit child={child} {...props}/>}/> */}
      </Switch>
    );
  }
}
