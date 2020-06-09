import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import DatePicker from 'react-datepicker';
import { format, addDays } from 'date-fns';
import { filterByDate, showAll } from '../redux/actions';
import filterByDateSelector from '../redux/selectors/filterByDateSelector';

import Modal from './modal';
require('dotenv').config();
class WeightTable extends Component {
  state = {
    startDate: '',
    endDate: '',
    fieldMissed: false,
    showModal: false,
  };
  setlimitDate = (e, name) => {
    this.setState({ [name]: format(e, 'dd/MM/yyyyy') });
  };
  deleteWeight = () => {};
  onFilterByDate = () => {
    const { startDate, endDate } = this.state;
    if (startDate && endDate) {
      this.props.dispatch(filterByDate({ startDate, endDate }));
      return this.setState({ showModal: true, fieldMissed: false });
    }
    return this.setState({ showModal: true, fieldMissed: true });
  };
  showAll = () => {
    this.props.dispatch(showAll());
  };
  componentDidUpdate() {
    if (this.state.showModal) {
      setTimeout(() => {
        this.setState({ showModal: false, fieldMissed: false, showAll: false });
      }, 3000);
    }
  }
  render() {
    const { showModal, fieldMissed, startDate, endDate } = this.state;
    return (
      <CSSTransition
        in={true}
        timeout={100}
        classNames="weight-table"
        appear={true}
      >
        <div>
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
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.showAll}
          >
            Show all
          </button>
          <h2>Filter weights by date</h2>

          <ul className="weight-filter d-flex justify-content-between align-items-center">
            <li className="weight-filter-limitation">Start :</li>
            <li>
              <DatePicker
                onSelect={this.handleSelect}
                dateFormat="dd/MM/yyyyy"
                maxDate={addDays(new Date(), 0)}
                placeholderText="Select start date "
                onChange={(e) => this.setlimitDate(e, 'startDate')}
              />
            </li>
            <li className="show-date-box start-date-show">{startDate}</li>

            <li className="weight-filter-limitation">End :</li>
            <li>
              <DatePicker
                onSelect={this.handleSelect}
                dateFormat="dd/MM/yyyyy"
                maxDate={addDays(new Date(), 0)}
                placeholderText="Select end date "
                onChange={(e) => this.setlimitDate(e, 'endDate')}
              />
            </li>
            <li className="show-date-box end-date-show">{endDate}</li>
            <li>
              <button className="filter-btn" onClick={this.onFilterByDate}>
                Filter
              </button>
            </li>
          </ul>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Weight (KG)</th>
                <th scope="col">Weight (LB)</th>
                <th scope="col">Date</th>
                <th scope="col">Delete Weight</th>
                <th scope="col">Modify Weight</th>
              </tr>
            </thead>
            <tbody>
              {this.props.state.length > 0 &&
                this.props.state.map((weightItem) => {
                  return (
                    <tr key={weightItem.id}>
                      <td>{weightItem.weight}</td>
                      <td>{(weightItem.weight * 2.20462).toPrecision(3)}</td>
                      <td>{weightItem.date}</td>
                      <td>
                        <button
                          id={weightItem.id}
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={this.deleteWeight}
                        >
                          Delete
                        </button>
                      </td>
                      <td>
                        <button
                          id={weightItem.id}
                          type="button"
                          className="btn btn-warning"
                        >
                          Modify
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </CSSTransition>
    );
  }
}

const mapStateToProps = function ({ weights, startDate, endDate }) {
  return {
    state:
      startDate && endDate
        ? filterByDateSelector(weights, startDate, endDate)
        : weights,
  };
};
export default connect(mapStateToProps)(WeightTable);
