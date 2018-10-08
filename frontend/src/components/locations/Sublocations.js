import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Sublocation from './Sublocation';
import styles from './Sublocations.css';

class Sublocations extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    sublocations: PropTypes.array
  };

  render() {
    const { match, sublocations } = this.props;
    const { path } = match;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {sublocations &&
                sublocations.map(sublocation => {
                  return (
                    <li key={sublocation.name}><NavLink to={`${path}/${sublocation.name}`}>{`${sublocation.name}`}</NavLink></li>
                  );
                })
              }
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {sublocations &&
                    sublocations.map(sublocation => {
                      return (
                        <Route key={sublocation.name} path={`${path}/${sublocation.url}`} render={props => <Sublocation {...props} sublocation={sublocation} />} />
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
)(Sublocations);