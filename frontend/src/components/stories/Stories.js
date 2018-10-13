import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Story from './Story';
import { loadStories } from './actions';
import { getStories } from './reducers';
import { postStory } from '../../services/api';

import styles from './Stories.css';

class Stories extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    stories: PropTypes.array,
    locationObject: PropTypes.object
  };

  componentDidMount() {
    this.props.loadStories();
  }

  handleAddStory = () => {
    const story = {
      url: 'newstory',
      name: 'New Story'
    };

    postStory(story)
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
  state => ({
    stories: getStories(state)
  }), {
    loadStories
  }
)(Stories);