import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import SuperComponent from './SuperComponent';
import { getData } from './reducers';
import {
  addData,
  loadData,
  updateData,
  deleteData
} from './actions';

import styles from './styles.css';

class SuperContainer extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    dataType: PropTypes.string.isRequired,
    childDataType: PropTypes.string.isRequired,
    addData: PropTypes.func.isRequired,
    loadData: PropTypes.func,
    updateData: PropTypes.func,
    deleteData: PropTypes.func
  };

  componentDidMount() {
    this.props.loadData();
  }

  handleCreateData = () => {
    this.props.addData();
  };

  render() {
    const { handleCreateData } = this;
    const { data, dataType, childDataType } = this.props;

    if(!data) return null;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {data.map(data => (<NavLink key={data._id} to={`/${dataType}/${data.url}`}><li >{data.name}</li></NavLink>))}
              <li onClick={handleCreateData}>+</li>
            </ul>
          </header>

          <div>
            <Switch>
              {data.map(data => (<Route
                key={data._id}
                path={`/${dataType}/${data.url}`}
                render={props => <SuperComponent {...props} data={data} dataType={childDataType} parentDataType={dataType} />}/>))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    data: getData(state)
  }),
  {
    addData,
    loadData,
    updateData,
    deleteData
  }
)(SuperContainer);