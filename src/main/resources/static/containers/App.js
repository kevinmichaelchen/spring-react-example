'use strict';

const client = require('../client');

import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EmployeeActions from '../actions'
import EmployeeList from "./../components/EmployeeList.js";

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {employees: []};
  // }
  //
  // componentDidMount() {
  //   console.log('mounted')
  //   client({method: 'GET', path: '/api/employees'}).done(response => {
  //     this.setState({employees: response.entity._embedded.employees});
  //   });
  // }

  render() {
    const { employees, actions } = this.props
    return (
      <div>
        <EmployeeList employees={employees} actions={actions} />
        <Footer addEmployee={actions.addEmployee} />
      </div>
    )
  }
}

App.propTypes = {
  employees: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    employees: state.employees
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EmployeeActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)