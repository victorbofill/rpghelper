import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import { loadLocations } from '../actions';
import Sublocation from './Sublocation';
import { postSublocation } from '../../../services/api';

import styles from './Sublocations.css';

class Sublocations extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    sublocations: PropTypes.array,
    locationObject: PropTypes.object,
    loadLocations: PropTypes.func
  };

  handleAddSublocation = () => {
    const { _id } = this.props.locationObject;
    
    const sublocation = {
      url: 'newsublocation',
      name: 'New Sublocation',
      description: 'description',
    };

    postSublocation(_id, sublocation)
      .then(() => this.props.loadLocations());
  };

  render() {
    const { match, sublocations, locationObject } = this.props;
    const { handleAddSublocation } = this;
    const { path } = match;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {sublocations && (sublocations[0] !== null) &&
                sublocations.map(sublocation => {
                  return (
                    <li key={sublocation._id}><NavLink to={`${path}/${sublocation.url}`}>{`${sublocation.name}`}</NavLink></li>
                  );
                })
              }
              <li onClick={handleAddSublocation}>+</li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {sublocations && (sublocations[0] !== null) &&
                    sublocations.map(sublocation => {
                      return (
                        <Route key={sublocation._id} path={`${path}/${sublocation.url}`} render={props => <Sublocation {...props} locationObject={locationObject} sublocation={sublocation} />} />
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
  state => state,
  { loadLocations }
)(Sublocations);
