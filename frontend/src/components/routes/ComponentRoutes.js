import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

class ComponentRoutes extends Component {
  static propTypes = {
    child: PropTypes.object.isRequired,
    dataComponent: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  };

  render() {
    const { child, dataComponent, match } = this.props;

    console.log('path: ', `${match.path}/${child.url}/subregions`);

    return (
      <Switch>
        <Route path={`${match.path}/${child.url}/subregions`} component={dataComponent}/>
        {/* <Route exact path={`${match.path}/${child.url}/`} render={props => <RegionDetails region={child} {...props} />}/>
        <Route path={`${match.path}/${child.url}/edit`} render={props => <EditRegion region={child} {...props}/>}/> */}
      </Switch>
    );
  }
}

export default withRouter(ComponentRoutes);