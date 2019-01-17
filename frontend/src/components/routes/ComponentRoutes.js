import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Details from '../details/Details';

export default class ComponentRoutes extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
    dataComponents: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
  };

  render() {
    const { child, dataComponents, match } = this.props;

    return (
      <Switch>
        <Route exact path={`${match.path}`} render={props => <Details child={child} {...props} />}/>
        {dataComponents && dataComponents.map(component => {
          return <Route key={component} path={`${match.path}`} component={component}/>;
        }) }
        {/* <Route path={`${match.path}/edit`} render={props => <Edit child={child} {...props}/>}/> */}
      </Switch>
    );
  }
}
