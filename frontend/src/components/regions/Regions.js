import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Region from './Region';
import { loadRegions, addRegion } from './actions';
import { getRegions } from './reducers';
import { postRegion } from '../../services/api';


import styles from './Regions.css';

class Regions extends PureComponent {
  static propTypes = {
    regions: PropTypes.array,
    loadRegions: PropTypes.func,
    addRegion: PropTypes.func.isRequired
  };

  state = {
    addRegionForm: '',
    activeRegion: null
  };

  componentDidMount() {
    this.props.loadRegions();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRegion({ name: this.state.addRegionForm });
    this.setState({ addRegionForm: '' });
    this.props.loadRegions();
  };

  handleAddRegion = () => {
    const region = {
      url: 'newregion',
      name: 'New region'
    };

    postRegion(region)
      .catch(err => console.log(err));
  };

  render() {
    const { handleAddRegion } = this;
    const { regions } = this.props;

    return (

      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {regions && !!regions.length ? regions.map((region, i) => (
                <li key={i}><NavLink  to={`/regions/${region.url}`}>{region.name}</NavLink></li>
              )) : null
              }
              <li onClick={handleAddRegion}>+</li>
            </ul>
          </header>

          <main>
            <div>
              <Switch>
                {regions && !!regions.length ? regions.map((region, i) => (
                  <Route key={i} path={`/regions/${region.name}`} component={Region} region={region} />
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
    loadRegions,
    addRegion
  }
)(Regions);