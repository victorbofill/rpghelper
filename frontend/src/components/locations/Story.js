import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { delStory } from '../../services/api';

import styles from './Stories.css';

class Story extends PureComponent {
  static propTypes = {
    locationObject: PropTypes.object,
    story: PropTypes.object
  };

  handleDeleteStory = () => {
    const { _id: storyId } = this.props.story;
    const { _id } = this.props.locationObject;
    
    delStory(_id, storyId)
      .catch(err => console.log(err));
  };

  render() {
    const { handleDeleteStory } = this;

    return (
      <div>
        <h1 className={styles.story}>Story</h1>
        <h2 onClick={handleDeleteStory}>-</h2>
      </div>
    );
  }
}

export default connect(
)(Story);