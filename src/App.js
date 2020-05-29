import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './layout/header';
import Form from './components/form';
import FilterBox from './components/filterBox';
import WeightInfos from './components/weightInfos';
import ChangeByDate from './components/changeByDate';
import WeightTable from './components/weightTable';
import './css/index.css';
import './css/reset.css';
import './css/typography/fonts.css';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    isUnit: 'kg',
  };
  handleUnit = (e) => {
    this.setState({ isUnit: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Header unit={this.state.isUnit} />
          <Switch>
            <Route exact path="/">
              <Form handleUnit={this.handleUnit} unit={this.state.isUnit} />
            </Route>
            <Route path="/filterBox">
              <FilterBox />
            </Route>
            <Route path="/weightInfos">
              <WeightInfos />
            </Route>
            <Route path="/changeByDate">
              <ChangeByDate />
            </Route>
            <Route path="/weightTable">
              <WeightTable />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
