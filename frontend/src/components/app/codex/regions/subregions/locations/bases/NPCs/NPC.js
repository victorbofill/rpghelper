import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink, withRouter } from 'react-router-dom';

import EditNPC from './EditNPC';

import styles from './NPCs.css';

class NPC extends Component {
  static propTypes = {
    child: PropTypes.object,
    match: PropTypes.object
  };

  render() {
    const { child, match } = this.props;

    if(!child) return null;

    return (
      <Router>
        <Fragment>
          <header className={styles.header}>
            <ul>
              <NavLink to={`${match.path}`}><li>Details</li></NavLink>
              <NavLink to={`${match.path}/edit`}><li>Edit</li></NavLink>
            </ul>
          </header>

          <div>
            <Switch>
              <Route exact path={`${match.path}`} render={props => <NPCDetails NPC={child} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditNPC NPC={child} {...props} />}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default withRouter(NPC);

class NPCDetails extends Component {
  static propTypes = {
    NPC: PropTypes.object.isRequired
  };

  render() {
    const { name, description, str, agi, end, cha, will, rea, per, relationship, skills, money } = this.props.NPC;

    return (
      <Fragment>
        <h1>{name}</h1>
        <p>Description: {description}</p>
        <p>Relationship: {relationship}</p>
        <p>Money: {money}</p>
        <p>Skills: {skills}</p>
        <ul>
          <li>STR: {str}</li>
          <li>AGI: {agi}</li>
          <li>END: {end}</li>
          <li>CHA: {cha}</li>
          <li>Will: {will}</li>
          <li>Rea: {rea}</li>
          <li>Per: {per}</li>
        </ul>
      </Fragment>
    );
  }
}
