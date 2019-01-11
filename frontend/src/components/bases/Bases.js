import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Base from './Base';
import { postBase } from '../../../services/api';

import styles from './Bases.css';

class Bases extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    bases: PropTypes.array,
    locationObject: PropTypes.object,
    loadLocations: PropTypes.func
  };

  handleAddBase = () => {
    const { _id } = this.props.locationObject;
    
    const base = {
      url: 'newbase',
      name: 'New Base',
      description: 'description',
    };

    postBase(_id, base)
      .then(() => this.props.loadLocations());
  };

  render() {
    const { match, bases, locationObject } = this.props;
    const { handleAddBase } = this;
    const { path } = match;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {bases && (bases[0] !== null) &&
                bases.map(base => {
                  return (
                    <li key={base._id}><NavLink to={`${path}/${base.url}`}>{`${base.name}`}</NavLink></li>
                  );
                })
              }
              <li onClick={handleAddBase}>+</li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {bases && (bases[0] !== null) &&
                    bases.map(base => {
                      return (
                        <Route key={base._id} path={`${path}/${base.url}`} render={props => <Base {...props} locationObject={locationObject} bases={bases} />} />
                      );
                    })
                  }
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { }
)(Bases);
