import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="weight-details">
          Last weight :
          {props.state.length != 0
            ? props.unit === 'kg'
              ? props.state[0].weight + props.unit
              : props.state[0].weight * (2.20462).toPrecision(4) + props.unit
            : ' Not provide yet'}
        </div>
        <div className="weight-date">
          {props.state.length != 0 ? props.state[0].date : 'There is no date'}
        </div>
        <div className="weight-access-btns">
          <Router>
            <span
              className="home"
              style={{
                fontSize: '30px',
                marginRight: '10px',
                position: 'relative',
                top: '7px',
              }}
            >
              <Link to="/" exact>
                <i className="fas fa-home"> </i>
              </Link>
            </span>
            <span className="access-btn weight-infos-btn">
              <i className="fas fa-ellipsis-h"></i>
            </span>
            <span className="access-btn">
              <i className="fas fa-plus-circle"></i>
            </span>
          </Router>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(Header);
