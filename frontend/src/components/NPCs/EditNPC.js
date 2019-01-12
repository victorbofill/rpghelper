import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateNPC } from './actions';

class EditNPC extends PureComponent {
  static propTypes = {
    NPC: PropTypes.object.isRequired
  };

  state = {
    url: '',
    name: '',
    description: '',
    relationship: '',
    money: '',
    str: '',
    agi: '',
    end: '',
    will: '',
    cha: '',
    rea: '',
    per: '',
    notes: '',
    skills: ''
  };

  componentDidMount = () => {
    const {
      url,
      name,
      description,
      relationship,
      money,
      str,
      agi,
      end,
      will,
      cha,
      rea,
      per,
      notes,
      skills,
    } = this.props.NPC;

    this.setState({
      url: url,
      name: name,
      description: description,
      relationship: relationship,
      money: money,
      str: str,
      agi: agi,
      end: end,
      will: will,
      cha: cha,
      rea: rea,
      per: per,
      notes: notes,
      skills:skills
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleUpdate = () => {
    const { _id } = this.props.NPC;

    const updatedNPC = {
      _id: _id,
      ...this.state
    };

    updateNPC(updatedNPC);
  };

  render() {
    const { handleChange, handleUpdate } = this;
    const {
      url,
      name,
      description,
      relationship,
      money,
      str,
      agi,
      end,
      will,
      cha,
      rea,
      per,
      notes,
      skills,
    } = this.state;

    return (
      <Fragment>
        <h1>Edit NPC</h1>
        <label>url: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="url" value={url} />
        <label>Name: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="name" value={name} />
        <label>Description: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="description" value={description} />
        <label>Relationship: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="relationship" value={relationship} />
        <label>Money: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="money" value={money} />
        <label>STR: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="str" value={str} />
        <label>AGI: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="agi" value={agi} />
        <label>END: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="end" value={end} />
        <label>Will: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="will" value={will} />
        <label>CHA: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="cha" value={cha} />
        <label>REA: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="rea" value={rea} />
        <label>PER: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="per" value={per} />
        <label>Notes: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="notes" value={notes} />
        <label>Skills: </label>
        <input onBlur={handleUpdate} onChange={handleChange} type="text" name="skills" value={skills} />
      </Fragment>
    );
  }
}

export default connect(
)(EditNPC);