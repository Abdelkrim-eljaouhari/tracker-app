import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

import { v4 as uuidv4 } from 'uuid';
class ChangeByDate extends Component {
  state = {
    date: '',
    weight: '',
    id: '',
    unit: '',
  };
  handleUnit = (e) => {
    this.setState({ unit: e.target.value });
  };
  handlechange = (e) => {
    this.setState({ weight: e.target.value });
  };
  handleSelect = () => {
    console.log('clicked');
  };
  handleSelect = (e) => {
    console.log(format(e, 'MM/dd/yyyy'));
  };
  addWeight = (e) => {
    e.preventDefault();
    this.setState({
      date: this.state.date,
      weight: this.state.weight,
      id: uuidv4(),
    });
  };
  render() {
    return (
      <form onSubmit={this.addWeight} className="change-by-date-box">
        <div className="form-row pl-2 flex-column  align-items-center">
          <input
            type="number"
            placeholder="Add your current weight"
            name="weight"
            value={this.state.weight}
            onChange={this.handlechange}
            max="200"
            min="10"
          />
          <select
            className="form-control form-control-lg"
            onClick={this.handleUnit}
          >
            <option disabled>Select a unit</option>
            <option value="kg">KG</option>
            <option value="lb">Lb</option>
          </select>
          <DatePicker onSelect={this.handleSelect} dateFormat="DD/MM/YYYY" />
          <input type="submit" />
        </div>
      </form>
    );
  }
}

export default ChangeByDate;
