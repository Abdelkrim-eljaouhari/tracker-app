import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  state = {
    showTable: false,
  };
  toggleTable = () => {
    this.setState({ showTable: !this.state.showTable });
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="weight-details">
            Last weight :
            {this.props.state.length != 0
              ? this.props.unit === 'kg'
                ? this.props.state[0].weight + this.props.unit
                : this.props.state[0].weight * (2.20462).toPrecision(4) +
                  this.props.unit
              : ' Not provide yet'}
          </div>
          <div className="weight-date">
            {this.props.state.length != 0
              ? this.props.state[0].date
              : 'There is no date'}
          </div>
          <div className="weight-access-btns">
            <span
              className="home"
              style={{
                fontSize: '30px',
                marginRight: '10px',
                position: 'relative',
                top: '7px',
              }}
            >
              <Link to="/" exact="true">
                <i className="fas fa-home"></i>
              </Link>
            </span>
            <span
              className="access-btn weight-infos-btn"
              onClick={this.toggleTable}
            >
              <i className="fas fa-ellipsis-h"></i>
            </span>
            <CSSTransition
              in={this.state.showTable}
              timeout={1000}
              classNames="table-info"
              unmountOnExit={true}
            >
              <ul className="weight-infos-list">
                <li>
                  <Link to="/weightTable">Weight table</Link>
                </li>
                <li>Plot a chart</li>
              </ul>
            </CSSTransition>
            <span className="access-btn">
              <Link to="/changeByDate">
                <i className="fas fa-plus-circle"></i>
              </Link>
            </span>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(Header);
