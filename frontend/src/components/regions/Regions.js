import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Region from './Region';
import { getRegions } from './reducers';
import {
  addRegion,
  loadRegions,
  updateRegion,
  deleteRegion
} from './actions';

import styles from './Regions.css';

class Regions extends PureComponent {
  static propTypes = {
    addRegion: PropTypes.func.isRequired,
    loadRegions: PropTypes.func,
    updateRegion: PropTypes.func,
    deleteRegion: PropTypes.func,
    regions: PropTypes.array
  };

  componentDidMount() {
    this.props.loadRegions();
  }

  handleCreateRegion = () => {
    this.props.addRegion();
  };

  render() {
    const { handleCreateRegion } = this;
    const { regions } = this.props;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {regions && !!regions.length ? regions.map((region) => (
                <li key={region._id}><NavLink  to={`/regions/${region.url}`}>{region.name}</NavLink></li>
              )) : null
              }
              <li onClick={handleCreateRegion}>+</li>
            </ul>
          </header>

          <main>
            <div>
              <Switch>
                {regions && !!regions.length ? regions.map(region => (
                  <Route key={region._id} path={`/regions/${region.name}`} render={props => <Region region={region}  {...props} />} />
                )) : null
                }
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    regions: getRegions(state)
  }),
  {
    addRegion,
    loadRegions,
    updateRegion,
    deleteRegion
  }
)(Regions);