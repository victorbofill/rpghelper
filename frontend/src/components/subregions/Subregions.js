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
    subregions: PropTypes.array,
    addSubregion: PropTypes.func.isRequired,
    loadSubregions: PropTypes.func,
    updateSubregion: PropTypes.func,
    deleteSubregion: PropTypes.func,
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.loadSubregions();
  }

  handleCreateSubregion = () => {
    this.props.addSubregion();
  };

  render() {
    const { handleCreateSubregion } = this;
    const { subregions, match } = this.props;

    console.log('match.path: ', match.path);

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {subregions && subregions.map(subregion => (<NavLink key={subregion._id} to={`${match.path}/${subregion.url}`}><li >{subregion.name}</li></NavLink>))}
              <li onClick={handleCreateSubregion}>+</li>
            </ul>
          </header>

          <div>
            <Switch>
              {subregions && subregions.map(subregion => (<Route key={subregion._id} path={`${match.path}/${subregion.url}`} render={props => <Subregion {...props} subregion={subregion} />}/>))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    subregions: getSubregions(state)
  }),
  {
    addSubregion,
    loadSubregions,
    updateSubregion,
    deleteSubregion
  }
)(Subregions);