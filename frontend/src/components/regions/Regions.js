import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Region from './Region';
import styles from './Regions.css';
import { loadRegions, addRegion } from './actions';
import { getRegions } from './reducers';

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

  handleChange = ({ target }) => {
    this.setState({ addRegionForm: target.value });
  };

  render() {
    const { regions } = this.props;

    return (

      <Router>
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} type="text" id="name"/>
            </form>
          </div>
          <header className={styles.header}>
            <ul>
              {regions && !!regions.length ? regions.map((region, i) => (
                <li key={i}><NavLink  to={`/regions/${region.name}`}>{region.name}</NavLink></li>
              )) : null
              }
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