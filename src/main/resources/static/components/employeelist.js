'use strict';

import React, { Component, PropTypes } from 'react'
import Employee from "./Employee.js";

class EmployeeList extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Description</th>
        </tr>
        {this.props.employees.map(employee =>
          <Employee key={employee._links.self.href} employee={employee}/>
        )}
      </table>
    )
  }
}

export default EmployeeList;