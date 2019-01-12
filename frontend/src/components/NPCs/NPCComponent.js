import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import EditNPC from './EditNPC';

import styles from './NPCs.css';

class NPCComponent extends PureComponent {
  static propTypes = {
    NPC: PropTypes.object,
    match: PropTypes.object
  };

  render() {
    const { NPC, match } = this.props;

    if(!NPC) return null;

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
              <Route exact path={`${match.path}`} render={props => <NPCDetails NPC={NPC} {...props} />}/>
              <Route path={`${match.path}/edit`} render={props => <EditNPC NPC={NPC} {...props} />}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(
)(NPCComponent);

class NPCDetails extends PureComponent {
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
