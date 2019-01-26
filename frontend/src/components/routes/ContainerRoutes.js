import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Edit from '../edit/Edit';

export default class ContainerRoutes extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    DataComponent: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
  };

  render() {
    const { data, DataComponent, path } = this.props;

    return (
      <Switch>
        {data && data.map(child => {
          return (<Route key={child._id} path={`${path}/${child.url}`} render={() => <DataComponent child={child} />}/>);
        })}
        {data && 
          <Route path={`${path}/edit`} render={() => <Edit data={data} />}/>
        }
      </Switch>
    );
  }
}
