import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { putLocation } from '../../services/api';

export default class LocationDetails extends PureComponent {
  static propTypes = {
    location: PropTypes.object
  };

  defaultState = {
    description: '',
    url: '',
    name: '',
    assets: '',
    overhead: '',
    income: '',
    profit: ''
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
      assets: parseInt(assets) || location.finances.assets,
      overhead: parseInt(overhead) || location.finances.overhead,
      income: parseInt(income) || location.finances.income,
      profit: parseInt(profit) || location.finances.profit
    };

    putLocation(location._id, updatedLocation);
    this.setState(this.defaultState);
  };

  render() {
    const { handleChange, handleUpdateLocation } = this;
    const { location } = this.props;
    const { description, url, name, assets, income, overhead, profit } = this.state;

    return (
      <div>
        <main>
          <fieldset>
            <label>URL: </label>
            <input name="url" onChange={handleChange} value={url} placeholder={location.url} type="text" />
            <label>Name: </label>
            <input name="name" onChange={handleChange} value={name} placeholder={location.name} type="text" />
          </fieldset>
          <fieldset>
            <label>Description: </label>
            <textarea name="description" onChange={handleChange} value={description} placeholder={location.description}/>
          </fieldset>
          <fieldset>
            <p>Finances</p>
            <label>Assets: </label>
            <input name="assets" onChange={handleChange} value={assets} placeholder={assets || 0} type="text" />
            <label>Income: </label>
            <input name="income" onChange={handleChange} value={income} placeholder={income || 0} type="text" />
            <label>Overhead: </label>
            <input name="overhead" onChange={handleChange} value={overhead} placeholder={overhead || 0} type="text" />
            <label>Profit: </label>
            <input name="profit" onChange={handleChange} value={profit} placeholder={profit || 0} type="text" />
          </fieldset>
          <input type="button" onClick={handleUpdateLocation} value="Submit Update" />
        </main>
      </div>
    );
  }
}
