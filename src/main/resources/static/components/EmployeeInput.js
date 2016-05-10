import React, {Component, PropTypes} from "react";

class EmployeeInput extends Component {
  constructor(props, content) {
    super(props, context)
    this.state = {
      editing: false
    }
  }

  handleDoubleClick() {
    this.setState({editing: true})
  }
  
  handleSave(id, firstName, lastName) {
    if (firstName.length !== 0 && lastName.length !== 0) {
      this.props.editEmployee(firstName, lastName)
    }
    this.setState({editing: false})
  }
  
  render() {
    
  }

}