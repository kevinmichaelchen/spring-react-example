import * as types from '../constants/ActionTypes'

export function addEmployee(firstName, lastName) {
  return { type: types.ADD_EMPLOYEE, firstName, lastName }
}

export function deleteEmployee(id) {
  return { type: types.DELETE_EMPLOYEE, id }
}

export function editEmployee(id, firstName, lastName) {
  return { type: types.EDIT_EMPLOYEE, firstName, lastName }
}