import React, { Component } from 'react';
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import { addWeight, ModifyTodayWeight } from '../redux/actions';
import { connect } from 'react-redux';
class Form extends Component {
  state = {
    weight: '',
    date: '',
    id: '',
    isModify: false,
  };

  handlechange = (e) => {
    this.setState({
      weight: e.target.value,
      date: format(new Date(), 'MM/dd/yyyy'),
      id: uuidv4(),
    });
  };
  addWeight = (e) => {
    e.preventDefault();
    this.setState({ isModify: true });
    if (this.props.state.length !== 0) {
      return this.props.state[0].date === format(new Date(), 'MM/dd/yyyy')
        ? this.props.changeCurrentWeight(ModifyTodayWeight(this.state))
        : this.props.add(addWeight(this.state));
    } else {
      return this.props.add(addWeight(this.state));
    }
  };

  render() {
    return (
      <>
        <h1 style={{ color: 'green', textAlign: 'center' }}>
          {this.state.isModify
            ? "Modify today's weight"
            : "Add your today's weight"}
        </h1>
        <form onSubmit={this.addWeight}>
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
              onClick={this.props.handleUnit}
            >
              <option disabled>Select a unit</option>
              <option value="kg">KG</option>
              <option value="lb">Lb</option>
            </select>

            <input
              type="submit"
              value={this.state.isModify ? 'Modify' : 'Add'}
            />
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (addWeight) => dispatch(addWeight),
    changeCurrentWeight: (currentWeight) => dispatch(currentWeight),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
