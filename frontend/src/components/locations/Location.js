import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NPCs from './NPCs';
import Stories from './Stories';
import Sublocations from './Sublocations';
import styles from './Locations.css';

export default class Location extends PureComponent {
  static propTypes = {
    locationObject: PropTypes.object
  };

  render() {
    const { npcs, stories, sublocations } = this.props.locationObject;
    const { match } = this.props;
    const { path } = match;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to={`${path}/npcs`}>NPCs</NavLink></li>
              <li><NavLink to={`${path}/stories`}>Stories</NavLink></li>
              <li><NavLink to={`${path}/sublocations`}>Sublocations</NavLink></li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  <Route exact path={`${path}/npcs`} render={props => <NPCs { ...props } npcs={npcs} />}/>
                  <Route exact path={`${path}/stories`} render={props => <Stories { ...props } stories={stories} />}/>
                  <Route exact path={`${path}/sublocations`} render={props => <Sublocations { ...props } sublocations={sublocations} />}/>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}
