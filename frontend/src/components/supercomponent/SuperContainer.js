import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import SuperComponent from './SuperComponent';
import { fetchApiFunctions } from '../../services/api';

import styles from './styles.css';

export default class SuperContainer extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired
  };

  state = {
    apiFunctions: null
  };

  componentDidMount() {
    const { type } = this.props;
    this.setState({ apiFunctions: fetchApiFunctions(type) });
  }

  render() {
    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {/* {data.map(data => (<NavLink key={data._id} to={`/${dataType}/${data.url}`}><li >{data.name}</li></NavLink>))}
              <li onClick={handleCreateData}>+</li> */}
            </ul>
          </header>

          <div>
            <Switch>
              {/* {data.map(data => (<Route
                key={data._id}
                path={`/${dataType}/${data.url}`}
                render={props => <SuperComponent {...props} data={data} dataType={childDataType} parentDataType={dataType} />}/>))} */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
