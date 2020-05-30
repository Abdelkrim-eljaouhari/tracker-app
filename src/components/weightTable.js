import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import DatePicker from 'react-datepicker';
import { format, addDays } from 'date-fns';
import { filterByDate } from '../redux/actions';
import Modal from './modal';
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
  deleteWeight = () => {
    console.log('clicked');
  };
  onFilterByDate = () => {
    const { startDate, endDate } = this.state;
    if (startDate && endDate) {
      this.props.dispatch(filterByDate({ startDate, endDate }));
      return this.setState({ showModal: true, fieldMissed: false });
    }
    // return this.setState({ showModal: true ,fieldMissed: false  });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.showModal) {
      setTimeout(() => {
        this.setState({ showModal: false, fieldMissed: false });
      }, 3000);
    }
  }
  render() {
    const { showModal, fieldMissed } = this.state;
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
            <li className="show-date-box start-date-show">
              {this.state.startDate}
            </li>

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
            <li className="show-date-box end-date-show">
              {this.state.endDate}
            </li>
            <li>
              <button onClick={this.onFilterByDate}>Filter</button>
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
                      <td>Hi</td>
                      <td>{weightItem.date}</td>
                      <td>
                        <button
                          id={weightItem.id}
                          type="button"
                          className="btn btn-outline-danger"
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

const mapStateToProps = function (state) {
  return {
    state,
  };
};
export default connect(mapStateToProps)(WeightTable);
