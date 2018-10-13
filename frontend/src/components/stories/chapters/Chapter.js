import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { delStory } from '../../../services/api';


class Story extends PureComponent {
  static propTypes = {
    locationObject: PropTypes.object,
    chapter: PropTypes.object
  };

  handleDeleteChapter = () => {
    const { _id: chapterId } = this.props.chapter;
    const { _id } = this.props.locationObject;
    
    delStory(_id, chapterId)
      .catch(err => console.log(err));
  };

  render() {
    const { chapter } = this.props;
    const { name, description, reward } = chapter;
    const { handleDeleteChapter } = this;

    return (
      <div>
        <button onClick={handleDeleteChapter}>Delete Chapter</button>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{reward}</p>
      </div>
    );
  }
}

export default connect(
)(Story);