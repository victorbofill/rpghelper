import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Edit from '../edit/Edit';

import styles from './Subregions.css';

class Subregion extends PureComponent {
  static propTypes = {
    subregion: PropTypes.any.isRequired
  };

  render() {
    if(!this.props.subregion) return null;

    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to={`/Subregions/${Subregion.url}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route path={`/Subregions/${Subregion.url}/edit`} render={props => <Edit data={Subregion} {...props}/>}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(Subregion);