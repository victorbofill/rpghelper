import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Subregion from './Subregion';
import { getSubregions } from './reducers';
import {
  addSubregion,
  loadSubregions,
  updateSubregion,
  deleteSubregion
} from './actions';

import styles from './Subregions.css';

class Subregions extends PureComponent {
  static propTypes = {
    addSubregion: PropTypes.func.isRequired,
    loadSubregions: PropTypes.func,
    updateSubregion: PropTypes.func,
    deleteSubregion: PropTypes.func,
    subregions: PropTypes.array
  };

  componentDidMount() {
    this.props.loadSubregions();
  }

  handleCreateRegion = () => {
    this.props.addSubregion();
  };

  render() {
    const { handleCreateSubregion } = this;
    const { subregions } = this.props;

    if(!subregions) return null;
    
    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {subregions.map(subregion => (<NavLink key={subregion._id} to={`/subregions/${subregion.url}`}><li >{subregion.name}</li></NavLink>))}
              <li onClick={handleCreateSubregion}>+</li>
            </ul>
          </header>

          <div>
            <Switch>
              {subregions.map(subregion => (<Route key={subregion._id} path={`/subregions/${subregion.url}`} render={props => <Subregion {...props} subregion={subregion} />}/>))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    regions: getSubregions(state)
  }),
  {
    addSubregion,
    loadSubregions,
    updateSubregion,
    deleteSubregion
  }
)(Subregions);