import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Story from './Story';
import { api } from '../../../services/api';

class Stories extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  state= {
    stories: []
  };

  async componentDidMount() {
    const stories = await api.getAllData('stories');
    this.setState({ stories });
  }

  handleCreateStory = async() => {
    const { stories } = this.state;
    const newStory = await api.postData('stories');
    stories.push(newStory);
    this.setState({ stories });
  };

  render() {
    const { handleCreateStory } = this;
    const { path } = this.props.match;
    const { stories } = this.state;

    return (
      <Router>
        <Fragment>
          <p>Stories</p>
          {stories && stories.map(story => {
            <Story story={story} />;
          })}
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Stories);