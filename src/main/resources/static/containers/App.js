'use strict';

const client = require('../client');

import React, { Component } from 'react'
import EmployeeList from './../components/employeelist.js';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {employees: []};
	}

	componentDidMount() {
		console.log('mounted')
		client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
	}

	render() {
		return (
			<EmployeeList employees={this.state.employees}/>
		)
	}
}

React.render(
	<App />,
	document.getElementById('react')
)