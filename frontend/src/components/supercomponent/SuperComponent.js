import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Edit from '../edit/Edit';

import styles from './styles.css';

class SuperComponent extends PureComponent {
  static propTypes = {
    data: PropTypes.any.isRequired,
    dataType: PropTypes.string.isRequired,
    parentDataType: PropTypes.string.isRequired
  };

  render() {
    if(!this.props.data) return null;
    const { data, dataType, parentDataType } = this.props;

    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to={`/${parentDataType}/${data.url}/${dataType}`}><li>{dataType}</li></NavLink>
              <NavLink to={`/${parentDataType}/${data.url}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route path={`/${parentDataType}/${data.url}/${dataType}`} component={dataType}/>
              <Route path={`/${parentDataType}/${data.url}/edit`} render={props => <Edit data={data} {...props}/>}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(SuperComponent);