import React, { Component } from 'react';
import Header from './layout/header';
import Form from './components/form';
import FilterBox from './components/filterBox';
import WeightInfos from './components/weightInfos';
import ChangeByDate from './components/changeByDate';
import './css/index.css';
import './css/reset.css';
import './css/typography/fonts.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
        <Header unit={this.state.isUnit} />
        <Router>
          <Switch>
            <Route path="/" exact>
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
          </Switch>
        </Router>
      </div>
    );
  }
}

{
  /* <Switch>
<Route path="/filterBox">
  <FilterBox />
</Route>
<Route path="/weightInfos">
  <WeightInfos />
</Route>
<Route path="/changeByDate">
  <changeByDate />
</Route>
</Switch> */
}
export default connect()(App);
