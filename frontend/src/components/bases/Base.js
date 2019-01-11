import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadLocations } from '../actions';
import { delBase, putBase } from '../../../services/api';

import styles from './Base.css';

class Base extends PureComponent {
  static propTypes = {
    base: PropTypes.object,
    locationObject: PropTypes.object,
    loadLocations: PropTypes.func
  };

  defaultState = {
    editingName: '',
    editingUrl: '',
    editingDescription: '',
    editing: false
  };

  state = this.defaultState;

  handleDeleteBase = () => {
    const { _id } = this.props.locationObject;
    const { _id: baseId } = this.props.base;
    
    if(confirm('Are you sure?')) {
      delBase(_id, baseId);
    }
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name] : [target.value] });
  };

  handleUpdateBase = () => {
    const { _id } = this.props.locationObject;
    const { _id: baseId } = this.props.base;
    const { editingName, editingUrl, editingDescription } = this.state;

    const updatedBase = {
      name: editingName,
      url: editingUrl,
      description: editingDescription
    };

    this.setState(this.defaultState);

    putBase(_id, baseId, updatedBase)
      .then(() => this.props.loadLocations());
  };

  render() {
    const { handleDeleteBase, handleToggleEdit, handleChange, handleUpdateBase } = this;
    const { base } = this.props;
    const { name, description, url } = base;
    const { editing, editingUrl, editingName, editingDescription } = this.state;

    return (
      <div>
        <button onClick={handleToggleEdit}>Edit</button>
        <button onClick={handleDeleteBase}>Delete</button>

        {!editing &&
          <Fragment>
            <h1 className={styles.base}>{name}</h1>
            <p>{description}</p>
          </Fragment>
        }

        {editing &&
          <Fragment>
            <button type="button" onClick={handleUpdateBase}>Update</button>
            <fieldset>
              <label>URL: </label>
              <input name="editingUrl" onChange={handleChange} value={editingUrl} placeholder={url} type="text"/>
              <label>Name: </label>
              <input name="editingName" onChange={handleChange} value={editingName} placeholder={name} type="text"/>
              <label>Description: </label>
              <input name="editingDescription" onChange={handleChange} value={editingDescription} placeholder={description} type="text"/>
            </fieldset>
          </Fragment>
        }
      </div>
    );
  }
}

export default connect(
  null,
  { loadLocations }
)(Base);