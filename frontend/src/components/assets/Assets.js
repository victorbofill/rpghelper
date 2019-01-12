import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Asset from './Asset';
import { getAssets } from './reducers';
import {
  addAsset,
  loadAssets,
  updateAsset,
  deleteAsset
} from './actions';

import styles from './Assets.css';

class Assets extends PureComponent {
  static propTypes = {
    assets: PropTypes.array,
    addAsset: PropTypes.func,
    loadAssets: PropTypes.func,
    updateAssets: PropTypes.func,
    deleteAssets: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadAssets();
  }

  handleCreateAsset = () => {
    this.props.addAsset();
  };

  render() {
    const { handleCreateAsset } = this;
    const { assets, match } = this.props;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {assets && assets.map(asset => (<NavLink key={asset._id} to={`${match.path}/${asset.url}`}><li >{asset.name}</li></NavLink>))}
              <li onClick={handleCreateAsset}>+</li>
            </ul>
          </header>

          <div>
            <Switch>
              {assets && assets.map(asset => (<Route key={asset._id} path={`${match.path}/${asset.url}`} render={props => <Asset {...props} asset={asset} {...props} />}/>))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    assets: getAssets(state)
  }), {
    addAsset,
    loadAssets,
    updateAsset,
    deleteAsset  
  }
)(Assets);
