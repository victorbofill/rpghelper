import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Header from '../../shared/header/Header';
import Routes from '../../shared/routes/Routes';
import Chapter from './Chapter';
import { api } from '../../../../services/api';

class Chapters extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    parentId: PropTypes.string,
  };

  state= {
    chapters: []
  };

  async componentDidMount() {
    const { parentId } = this.props;
    const chapters = await api.getChildren('stories', parentId, 'chapters');
    this.setState({ chapters });
  }

  handleCreateChapter = async() => {
    const { parentId } = this.props;
    const { chapters } = this.state;
    const newChapter = await api.postData('chapters', { storyId: parentId });
    chapters.push(newChapter);
    this.setState({ chapters });
  };

  render() {
    const { handleCreateChapter } = this;
    const { path } = this.props.match;
    const { chapters } = this.state;

    return (
      <Router>
        <Fragment>
          <Header path={path} childrenList={chapters} handleCreateNewChild={handleCreateChapter} />
          <Routes  path={path} childrenList={chapters} Component={Chapter} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Chapters);