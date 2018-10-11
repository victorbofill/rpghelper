import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { delLocation } from '../../services/api';

import NPCs from './NPCs';
import Stories from './Stories';
import Sublocations from './Sublocations';
import LocationDetails from './LocationDetails';

import styles from './Locations.css';

export default class Location extends PureComponent {
  static propTypes = {
    locationObject: PropTypes.object
  };

  handleRemoveLocation = () => {
    if(confirm('Are you sure?')) {
      delLocation(this.props.locationObject._id);
    }
  };

  render() {
    const { npcs, stories, sublocations } = this.props.locationObject;
    const { match, locationObject } = this.props;
    const { path } = match;
    const { handleRemoveLocation } = this;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              <li><NavLink to={`${path}/details`}>Details</NavLink></li>
              <li><NavLink to={`${path}/npcs`}>NPCs</NavLink></li>
              <li><NavLink to={`${path}/stories`}>Stories</NavLink></li>
              <li><NavLink to={`${path}/sublocations`}>Sublocations</NavLink></li>
              <li onClick={handleRemoveLocation}>-</li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  <Route path={`${path}/details`} render={() => <LocationDetails location={locationObject} />}/>
                  <Route path={`${path}/npcs`} render={props => <NPCs { ...props } locationObject={locationObject} npcs={npcs} />}/>
                  <Route path={`${path}/stories`} render={props => <Stories { ...props } stories={stories} />}/>
                  <Route path={`${path}/sublocations`} render={props => <Sublocations { ...props } sublocations={sublocations} />}/>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}
