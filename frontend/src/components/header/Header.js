import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './styles.css';

export default class Header extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired
  };

  state = {
    data: null
  };

  componentDidMount() {
  }

  render() {
    const { type } = this.props;
    const { data } = this.state;

    return (
      <header className={styles.header}>
        <ul>
          {data && data.map(data => (<NavLink key={data._id} to={`/${type}/${data.url}`}><li >{data.name}</li></NavLink>))}
          {/* <li onClick={handleCreateData}>+</li> */}
        </ul>
      </header>
    );
  }
}
