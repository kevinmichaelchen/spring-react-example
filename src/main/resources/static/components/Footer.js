import React, { PropTypes, Component } from 'react'
import EmployeeInput from './EmployeeInput'

class Footer extends Component {
  handleSave(firstName, lastName) {
    if (firstName.length !== 0 && lastName.length !== 0) {
      this.props.addEmployee(firstName, lastName)
    }
  }

  render() {
    return (
      <header className="header">
        <h1>employees</h1>
        <EmployeeInput
          // newTodo
          onSave={this.handleSave.bind(this)} />
      </header>
    )
  }
}

Header.propTypes = {
  addEmployee: PropTypes.func.isRequired
}

export default Header