import * as types from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    firstName: 'Aragorn',
    lastName: 'Elessar',
  }
]

export default function employees(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EMPLOYEE:
      return [
        {
          id: state.reduce((maxId, employee) => Math.max(employee.id, maxId), -1) + 1,
          firstName: action.firstName,
          lastName: action.lastName
        },
        ...state
      ]

    case types.DELETE_EMPLOYEE:
      return state.filter(employee => employee.id !== action.id)

    case types.EDIT_EMPLOYEE:
      return state.map(employee =>
        employee.id === action.id ?
          Object.assign({}, employee, {firstName: action.firstName, lastName: action.lastName}) :
          employee
      )

    default:
      return state
  }
}