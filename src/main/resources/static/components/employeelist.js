'use strict';

const React = require('react');
import Employee from "./employee.js";

class EmployeeList extends React.Component {
  render() {
    var employees = this.props.employees.map(employee =>
      <Employee key={employee._links.self.href} employee={employee}/>
    );
    return (
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Description</th>
        </tr>
        {employees}
      </table>
    )
  }
}

export default EmployeeList;