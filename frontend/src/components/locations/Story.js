import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { delStory } from '../../services/api';

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
    const { story } = this.props;
    const { name, description, reward } = story;
    const { handleDeleteStory } = this;

    return (
      <div>
        <h3 onClick={handleDeleteStory}>-</h3>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{reward}</p>
      </div>
    );
  }
}

export default connect(
)(Story);