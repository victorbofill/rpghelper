import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { api } from '../../../../services/api';

class Chapter extends Component {
  static propTypes = {

  };

  defaultState = {
    editing: false,
    editUrl: '',
    editName: '',
    editDescription: '',
    editReward: ''
  };

  state = this.defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name] : [target.value] });
  };

  handleSubmitEdit = () => {
    // TODO: Implement edits
    // const { editUrl, editName, editDescription, editReward } = this.state;
    // const { url, name, description, reward } = this.props.chapter;
    // const { _id } = this.props.story;
    // const { _id: chapterId } = this.props.chapter;

    // const chapter = {
    //   url: editUrl || url,
    //   name: editName || name,
    //   description: editDescription || description,
    //   reward: editReward || reward
    // };

    // putChapter(_id, chapterId, chapter);
    // this.setState(this.defaultState);
  };

  handleDeleteChapter = () => {
    // TODO: Implement delete
    // const { _id: chapterId } = this.props.chapter;
    // const { _id } = this.props.story;
    
    // delChapter(_id, chapterId)
    //   .catch(err => console.log(err));
  };

  render() {
    const { chapter } = this.props;
    const { name, description, reward } = chapter;
    const { handleDeleteChapter, handleChange, handleToggleEdit, handleSubmitEdit } = this;
    const { editing, editUrl, editName, editDescription, editReward } = this.state;

    return (
      <Fragment>
        <button onClick={handleDeleteChapter}>Delete Chapter</button>
        <button onClick={handleToggleEdit}>Edit</button>
        {!editing && 
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{reward}</p>
        </div>
        }

        {editing &&
        <fieldset>
          <label>URL: </label>
          <input type="text" name="editUrl" onChange={handleChange} value={editUrl} placeholder={chapter.url} />
          <label>Name: </label>
          <input type="text" name="editName" onChange={handleChange} value={editName} placeholder={chapter.name} />
          <label>Description: </label>
          <input type="text" name="editDescription" onChange={handleChange} value={editDescription} placeholder={chapter.description} />
          <label>Reward: </label>
          <input type="text" name="editReward" onChange={handleChange} value={editReward} placeholder={chapter.reward} />
          <button onClick={handleSubmitEdit}>Submit</button>
        </fieldset>
        }
      </Fragment>
    );
  }
}

export default connect(
)(Chapter);