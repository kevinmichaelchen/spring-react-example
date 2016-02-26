package com.kitchen.skizule.repositories;

import com.kitchen.skizule.entities.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}