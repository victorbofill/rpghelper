import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadLocations } from '../actions';
import { delSublocation, putSublocation } from '../../../services/api';

import styles from './Sublocations.css';

class Sublocation extends PureComponent {
  static propTypes = {
    sublocation: PropTypes.object,
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

  handleDeleteSublocation = () => {
    const { _id } = this.props.locationObject;
    const { _id: sublocationId } = this.props.sublocation;
    
    if(confirm('Are you sure?')) {
      delSublocation(_id, sublocationId)
        .then(() => this.props.loadLocations());
    }
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name] : [target.value] });
  };

  handleUpdateSublocation = () => {
    const { _id } = this.props.locationObject;
    const { _id: sublocationId } = this.props.sublocation;
    const { editingName, editingUrl, editingDescription } = this.state;

    const updatedSublocation = {
      name: editingName,
      url: editingUrl,
      description: editingDescription
    };

    this.setState(this.defaultState);

    putSublocation(_id, sublocationId, updatedSublocation)
      .then(() => this.props.loadLocations());
  };

  render() {
    const { handleDeleteSublocation, handleToggleEdit, handleChange, handleUpdateSublocation } = this;
    const { sublocation } = this.props;
    const { name, description, url } = sublocation;
    const { editing, editingUrl, editingName, editingDescription } = this.state;

    return (
      <div>
        <button onClick={handleToggleEdit}>Edit</button>
        <button onClick={handleDeleteSublocation}>Delete</button>

        {!editing &&
          <Fragment>
            <h1 className={styles.sublocation}>{name}</h1>
            <p>{description}</p>
          </Fragment>
        }

        {editing &&
          <Fragment>
            <button type="button" onClick={handleUpdateSublocation}>Update</button>
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
)(Sublocation);