import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
class WeightTable extends Component {
  state = {
    showTable: false,
  };

  componentDidMount() {
    this.setState({ showTable: !this.state.showTable });
  }
  render() {
    return (
      <CSSTransition
        in={this.state.showTable}
        timeout={6000}
        classNames="weight-table"
      
      >
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </CSSTransition>
    );
  }
}

export default connect()(WeightTable);
