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
              {regions && regions.map(region => (<NavLink key={region._id} to={`/regions/${region.url}`}><li >{region.name}</li></NavLink>))}
              <li onClick={handleCreateRegion}>+</li>
            </ul>
          </header>

          <div>
            <Switch>
              {regions && regions.map(region => (<Route key={region._id} path={`/regions/${region.url}`} render={props => <Region {...props} region={region} />}/>))}
            </Switch>
          </div>
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