import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from './modal';
import { format, addDays } from 'date-fns';
import { addWeigthByDate } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
class ChangeByDate extends Component {
  state = {
    date: '',
    weight: '',
    id: '',
    unit: '',
    fieldMissed: false,
    showModal: false,
  };
  handleUnit = (e) => {
    this.setState({ unit: e.target.value });
  };
  handlechange = (e) => {
    this.setState({ weight: e.target.value });
  };

  handleSelect = (e) => {
    this.setState({ date: format(e, 'MM/dd/yyyy') });
  };
  addWeight = (e) => {
    const { weight, date, unit, message } = this.state;
    e.preventDefault();
    let convertTokg =
      unit === 'kg' ? weight : (weight / 2.20462).toPrecision(4);
    this.setState(
      {
        date,
        weight: convertTokg,
        id: uuidv4(),
        showModal: true,
      },
      () => {
        if (weight && date) {
          this.props.dispatch(addWeigthByDate(this.state));
          this.setState({
            date: '',
            weight: '',
            id: '',
            unit: '',
            fieldMissed: false,
          });
        } else {
          this.setState({
            fieldMissed: true,
          });
        }
      }
    );
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.showModal) {
      setTimeout(() => {
        this.setState({ showModal: false });
      }, 3000);
    }
  }
  render() {
    const { fieldMissed, showModal } = this.state;
    return (
      <>
        {showModal && (
          <Modal
            message={
              fieldMissed
                ? 'You have not provided a field'
                : 'Good work, you entered your weight'
            }
            color={fieldMissed ? 'red' : 'green'}
          />
        )}

        <form onSubmit={this.addWeight} className="change-by-date-box">
          <h1 style={{ color: 'white', textAlign: 'center' }}>
            Add weight you forgot or modify old weight
          </h1>
          <div className="form-row pl-2 flex-column  align-items-center">
            <input
              type="number"
              placeholder="Add your current weight"
              name="weight"
              value={this.state.weight}
              onChange={this.handlechange}
              max={this.state.unit === 'lb' ? 500 : 200}
              min={this.state.unit === 'lb' ? 20 : 10}
            />
            <select
              className="form-control form-control-lg"
              onClick={this.handleUnit}
            >
              <option disabled>Select a unit</option>
              <option value="kg">KG</option>
              <option value="lb">Lb</option>
            </select>
            <DatePicker
              onSelect={this.handleSelect}
              dateFormat="dd/MM/YYYY"
              maxDate={addDays(new Date(), 0)}
              placeholderText="Select a date "
            />
            <input type="submit" />
          </div>
        </form>
      </>
    );
  }
}
export default connect()(ChangeByDate);
