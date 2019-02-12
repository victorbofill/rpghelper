import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import Routes from '../../shared/routes/Routes';

class Chapter extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
  };

  render() {
    const { content } = this.props;
    const { path } = this.props.match;
    
    if(!content) return null;

    return (
      <Router>
        <Fragment>
          <Routes path={path} content={content} type={'chapters'} />
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(Chapter);
