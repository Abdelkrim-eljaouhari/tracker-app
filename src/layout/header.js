import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Header = (props) => {
  const [showTable, setShowTable] = useState(false);
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="weight-details">
          Last weight :
          {props.state.length != 0 ? (
            props.unit === 'kg' ? (
              <span className="number-font">
                {props.state[0].weight + props.unit}
              </span>
            ) : (
              <span className="number-font">
                {props.state[0].weight * (2.20462).toPrecision(4) + props.unit}
              </span>
            )
          ) : (
            <span className="weight-not-provided"> Not provided yet</span>
          )}
        </div>
        <div className="weight-date ">
          {props.state.length != 0 ? (
            <span className="number-font"> {props.state[0].date}</span>
          ) : (
            'There is no date'
          )}
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
            onClick={() => setShowTable(!showTable)}
          >
            <i className="fas fa-ellipsis-h"></i>
          </span>
          <CSSTransition
            in={showTable}
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
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(Header);
