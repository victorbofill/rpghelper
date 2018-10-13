import React, { Fragment, PureComponent } from 'react';
import { NavLink, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { delStory, postChapter } from '../../services/api';

import styles from './Stories.css';

class Story extends PureComponent {
  static propTypes = {
    match: PropTypes.object,
    locationObject: PropTypes.object,
    story: PropTypes.object,
    chapters: PropTypes.array
  };

  handleDeleteStory = () => {
    const { _id: storyId } = this.props.story;
    const { _id } = this.props.locationObject;
    
    delStory(_id, storyId)
      .catch(err => console.log(err));
  };

  handleAddChapter = () => {
    const { _id } = this.props.locationObject;
    const { _id: storyId } = this.props.story;

    const chapter = {
      url: 'newchapter',
      name: 'New Chapter'
    };

    postChapter(_id, storyId, chapter)
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
            <ul>
              <button onClick={handleDeleteStory}>Delete Story</button>
              <button onClick={handleAddChapter}>Add Chapter</button>
              {chapters && (chapters[0] !== null) &&
                  chapters.map(chapter => {
                    return (
                      <li key={chapter._id}><NavLink to={`${path}/${chapter.url}`}>{`${chapter.name}`}</NavLink></li>
                    );
                  })
              }
            </ul>
          </div>

          <div className={'rightColumn'}>
            {chapters && (chapters[0] !== null) &&
              chapters.map(chapter => {
                return (
                  <Route key={chapter._id} to={`${path}/${chapter.url}`}>{`${chapter.name}`}</Route>
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