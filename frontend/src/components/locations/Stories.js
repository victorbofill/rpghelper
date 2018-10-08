import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Story from './Story';
import styles from './Stories.css';

class Stories extends PureComponent {
  static propTypes = {
    stories: PropTypes.array,
    match: PropTypes.object
  };

  render() {
    const { match, stories } = this.props;
    const { path } = match;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            {stories &&
                stories.map(story => {
                  return (
                    <li key={story.name}><NavLink to={`${path}/${story.name}`}>{`${story.name}`}</NavLink></li>
                  );
                })
            }
          </header>

          <main>
            <div>
              <div>
                <Switch>
                  {stories &&
                    stories.map(story => {
                      return (
                        <Route key={story.name} path={`${path}/${story.url}`} render={props => <Story {...props} story={story} />} />
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