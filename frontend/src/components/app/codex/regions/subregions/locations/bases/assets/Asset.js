import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink, withRouter } from 'react-router-dom';

import EditAsset from './EditAsset';

import styles from './Assets.css';

class Asset extends Component {
  static propTypes = {
    child: PropTypes.object,
    match: PropTypes.object
  };

  render() {
    const { child, match } = this.props;

    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to={`${match.path}`}><li>Details</li></NavLink>
              <NavLink to={`${match.path}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route exact path={`${match.path}`} render={props => <AssetDetails asset={child} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditAsset asset={child} {...props} />}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Asset);

class AssetDetails extends Component {
  static propTypes = {
    asset: PropTypes.object.isRequired
  };

  render() {
    const { name, description } = this.props.asset;

    return (
      <Fragment>
        <h1>{name}</h1>
        <p>{description}</p>
      </Fragment>
    );
  }
}
