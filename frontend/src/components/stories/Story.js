import React, { Fragment, PureComponent } from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Chapter from './chapters/Chapter';
import { delStory, postChapter } from '../../services/api';

import styles from './Stories.css';

class Story extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    story: PropTypes.object
  };

  handleDeleteStory = () => {
    const { _id } = this.props.story;
    
    if(confirm('Are you sure?')) delStory(_id);
  };

  handleAddChapter = () => {
    const { _id } = this.props.story;

    const chapter = {
      url: 'newchapter',
      name: 'New Chapter',
      description: 'description',
      reward: 'reward',
      status: 'unavailable'
    };

    postChapter(_id, chapter)
      .catch(err => console.log(err));
  };

  render() {
    const { story, match } = this.props;
    const { path } = match;
    const { name, chapters } = story;
    const { handleDeleteStory, handleAddChapter } = this;

    return (
      <Fragment>
        <main className={styles.stories}>
          <div className={'title'}>
            <h1>{name}</h1>
          </div>

          <div className={'leftColumn'}>
            <button onClick={handleDeleteStory}>Delete Story</button>
            <button onClick={handleAddChapter}>Add Chapter</button>
            <ul>
              {chapters && (chapters[0] !== null) &&
                  chapters.map(chapter => {
                    return (
                      <NavLink key={chapter._id} to={`${path}/${chapter.url}`}><li>{`${chapter.name}`}</li></NavLink>
                    );
                  })
              }
            </ul>
          </div>

          <div className={'rightColumn'}>
            {chapters && (chapters[0] !== null) &&
              chapters.map(chapter => {
                return (
                  <Route key={chapter._id} path={`${path}/${chapter.url}`} render={props => <Chapter {...props} chapter={chapter} story={story}/>} />
                );
              })
            }
          </div>
        </main>
      </Fragment>
    );
  }
}

export default connect(
)(Story);