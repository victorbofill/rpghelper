import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Edit from '../edit/Edit';

export default class Routes extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    child: PropTypes.object.isRequired,
    dataComponents: PropTypes.array.isRequired,
  };

  state = {
    containerOrContent: '',
  };

  componentDidMount() {
    const { type } = this.props;
    this.setState({ containerOrContent: type ? 'container' : 'content' });
  }

  render() {
    const { containerOrContent } = this.state;

    return (
      <Switch>
        {containerOrContent === 'container' ?
          <ContainerRoutes /> :
          <ContentRoutes />
        }
      </Switch>
    );
  }
}

class ContainerRoutes extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    DataComponent: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
  };

  render() {
    const { path, data, DataComponent } = this.props;

    return (
      <Fragment>
        {data.map(child => {
          return (<Route
            key={child._id}
            path={`${path}/${child.url}`}
            render={() => <DataComponent child={child} />}/>);
        })}
      </Fragment>
    );
  }
}

class ContentRoutes extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dataComponents: PropTypes.array.isRequired,
    child: PropTypes.object.isRequired,
  };

  render() {
    const { path, type, dataComponents, child } = this.props;

    return (
      <Fragment>
        {dataComponents.map(dataComponent => {
          const { route, component } = dataComponent;
          return <Route
            key={component}
            path={`${path}${route}`}
            component={component}/>;
        }) }
        <Route path={`${path}/`} render={props => <Edit data={child} type={type} {...props}/>}/>
      </Fragment>
    );
  }
}
