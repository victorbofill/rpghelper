import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Story from './Story';
import { postStory } from '../../services/api';

import styles from './Locations.css';

class Stories extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    stories: PropTypes.array,
    locationObject: PropTypes.object
  };

  handleAddStory = () => {
    const { _id } = this.props.locationObject;
    
    const story = {
      url: 'bar1',
      name: 'It Always Starts In A Bar',
      description: 'This is a description.',
      available: true,
      complete: false,
      reward: 'Some gold',
      notes: [],
    };

    postStory(_id, story)
      .catch(err => console.log(err));
  };

  render() {
    const { match, stories, locationObject } = this.props;
    const { handleAddStory } = this;
    const { path } = match;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {stories && (stories[0] !== null) &&
                  stories.map(story => {
                    return (
                      <li key={story._id}><NavLink to={`${path}/${story.url}`}>{`${story.name}`}</NavLink></li>
                    );
                  })
              }
              <li onClick={handleAddStory}>+</li>
            </ul>
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {stories && (stories[0] !== null) &&
                    stories.map(story => {
                      return (
                        <Route key={story._id} path={`${path}/${story.url}`} render={props => <Story {...props} story={story} locationObject={locationObject}/>} />
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
)(Stories);