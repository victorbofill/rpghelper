import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Base from './Base';
import { getBases } from './reducers';
import {
  addBase,
  loadBases,
  updateBase,
  deleteBase
} from './actions';

import styles from './Bases.css';

class Bases extends PureComponent {
  static propTypes = {
    bases: PropTypes.array,
    addBase: PropTypes.func,
    loadBases: PropTypes.func,
    updateBase: PropTypes.func,
    deleteBase: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadBases();
  }

  handleCreateBase = () => {
    this.props.addBase();
  };
  
  render() {
    const { handleCreateBase } = this;
    const { bases, match } = this.props;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {bases && bases.map(base => (<NavLink key={base._id} to={`${match.path}/${base.url}`}><li >{base.name}</li></NavLink>))}
              <li onClick={handleCreateBase}>+</li>
            </ul>
          </header>

          <div>
            <Switch>
              {bases && bases.map(base => (<Route key={base._id} path={`${match.path}/${base.url}`} render={props => <Base {...props} base={base} {...props} />}/>))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    bases: getBases(state)
  }), {
    addBase,
    loadBases,
    updateBase,
    deleteBase  
  }
)(Bases);
