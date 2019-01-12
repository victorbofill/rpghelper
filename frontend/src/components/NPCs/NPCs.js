import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import NPCComponent from './NPCComponent';
import { getNPCs } from './reducers';
import {
  addNPC,
  loadNPCs,
  updateNPC,
  deleteNPC
} from './actions';

import styles from './NPCs.css';

class NPCs extends PureComponent {
  static propTypes = {
    NPCs: PropTypes.array,
    addNPC: PropTypes.func,
    loadNPCs: PropTypes.func,
    updateNPC: PropTypes.func,
    deleteNPC: PropTypes.func,
    match: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadNPCs();
  }

  handleCreateNPC = () => {
    this.props.addNPC();
  };
  
  render() {
    const { handleCreateNPC } = this;
    const { NPCs, match } = this.props;

    return (
      <Router>
        <div>
          <header className={styles.header}>
            <ul>
              {NPCs && NPCs.map(NPC => (<NavLink key={NPC._id} to={`${match.path}/${NPC.url}`}><li>{NPC.name}</li></NavLink>))}
              <li onClick={handleCreateNPC}>+</li>
            </ul>
          </header>

          <div>
            <Switch>
              {NPCs && NPCs.map(NPC => (<Route key={NPC._id} path={`${match.path}/${NPC.url}`} render={props => <NPCComponent NPC={NPC} {...props} />}/>))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    NPCs: getNPCs(state)
  }), {
    addNPC,
    loadNPCs,
    updateNPC,
    deleteNPC  
  }
)(NPCs);
