import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../shared/header/Header';
import Routes from '../shared/routes/Routes';
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
          <Header path={path} childrenList={stories} handleCreateNewChild={handleCreateStory} />
          <Routes  path={path} childrenList={stories} Component={Story} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Stories);