import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { putLocation } from '../../services/api';

export default class LocationDetails extends PureComponent {
  static propTypes = {
    location: PropTypes.object
  };

  defaultState = {
    editDescription: '',
    editUrl: '',
    editName: '',
    editAssets: '',
    editOverhead: '',
    editIncome: '',
    editProfit: '',
    editEditing: false
  };

  state = this.defaultState;

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleUpdateLocation = () => {
    const { url, name, description, assets, overhead, income, profit } = this.state;
    const { location } = this.props;

    const updatedLocation = {
      url: url || location.url,
      name: name || location.name,
      description: description || location.description,
      assets: assets || location.finances.assets,
      overhead: overhead || location.finances.overhead,
      income: income || location.finances.income,
      profit: profit || location.finances.profit
    };

    putLocation(location._id, updatedLocation);
    this.setState(this.defaultState);
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  render() {
    const { handleChange, handleUpdateLocation, handleToggleEdit } = this;
    const { location } = this.props;
    console.log(location);
    const { description, url, name, assets, income, overhead, profit } = location;
    const { editDescription, editUrl, editName, editAssets, editIncome, editOverhead, editProfit, editing } = this.state;

    return (
      <div>
        <button onClick={handleToggleEdit}>Edit</button>
        {editing &&
          <main>
            <fieldset>
              <label>URL: </label>
              <input name="url" onChange={handleChange} value={editUrl} placeholder={location.url} type="text" />
              <label>Name: </label>
              <input name="name" onChange={handleChange} value={editName} placeholder={location.name} type="text" />
            </fieldset>
            <fieldset>
              <label>Description: </label>
              <textarea name="description" onChange={handleChange} value={editDescription} placeholder={location.description}/>
            </fieldset>
            <fieldset>
              <p>Finances</p>
              <label>Assets: </label>
              <input name="assets" onChange={handleChange} value={editAssets} placeholder={assets || 0} type="text" />
              <label>Income: </label>
              <input name="income" onChange={handleChange} value={editIncome} placeholder={income || 0} type="text" />
              <label>Overhead: </label>
              <input name="overhead" onChange={handleChange} value={editOverhead} placeholder={overhead || 0} type="text" />
              <label>Profit: </label>
              <input name="profit" onChange={handleChange} value={editProfit} placeholder={profit || 0} type="text" />
            </fieldset>
            <input type="button" onClick={handleUpdateLocation} value="Submit Update" />
          </main>
        }

        {!editing && 
          <main>
            <article>
              <h3>URL: </h3>
              <p>{url}</p>
              <h3>Name: </h3>
              <p>{name}</p>
            </article>
            <article>
              <h3>Description: </h3>
              <p>{description}</p>
            </article>
            <article>
              <h3>Assets: </h3>
              <p>{assets}</p>
              <h3>Income: </h3>
              <p>{income}</p>
              <h3>Overhead: </h3>
              <p>{overhead}</p>
              <h3>Profit: </h3>
              <p>{profit}</p>
            </article>
          </main>
        }
      </div>
    );
  }
}
