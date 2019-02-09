import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Edit from '../edit/Edit';

export default class Routes extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    type: PropTypes.string,
    data: PropTypes.array,
    child: PropTypes.object,
    dataComponents: PropTypes.array,
    DataComponent: PropTypes.func,
  };

  state = {
    containerOrContent: null,
  };

  componentDidMount() {
    const { type } = this.props;
    this.setState({ containerOrContent: type ? 'content' : 'container' });
  }

  render() {
    const { path, type, data, child, dataComponents, DataComponent } = this.props;
    const { containerOrContent } = this.state;

    return (
      <Switch>
        {containerOrContent === 'container' && <ContainerRoutes path={path} data={data} DataComponent={DataComponent} />}
        {containerOrContent === 'content' && <ContentRoutes path={path} type={type} child={child} dataComponents={dataComponents} />}
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
        {data && data.map(child => {
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
        {dataComponents && dataComponents.map(dataComponent => {
          const { route, component } = dataComponent;
          return <Route
            key={Math.random()}
            path={`${path}${route}`}
            component={component}/>;
        }) }
        <Route exact path={`${path}/`} render={props => <Edit data={child} type={type} {...props}/>}/>
      </Fragment>
    );
  }
}
