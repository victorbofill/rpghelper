import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import EditAsset from './EditAsset';

import styles from './Assets.css';

class Asset extends PureComponent {
  static propTypes = {
    asset: PropTypes.object,
    match: PropTypes.object
  };

  render() {
    const { asset, match } = this.props;

    if(!asset) return null;

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
              <Route exact path={`${match.path}`} render={props => <AssetDetails asset={asset} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditAsset asset={asset} {...props} />}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(Asset);

class AssetDetails extends PureComponent {
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
