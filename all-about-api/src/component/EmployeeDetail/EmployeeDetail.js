import React from 'react'
import './EmployeeDetail.css';

const EmployeeDetail = (props) => {

  const handleDelete = (id) => {
    props.deleteRecord(id);
  }

  const handleUpdateRecord = (selectedEmpData) => {
    props.updateRecord(selectedEmpData);
  }
  return (
    <div className='employee-detail'>
      <div className="container">
        <p>First Name: {props.emp.first_name}</p>
        <p>Last Name: {props.emp.last_name}</p>
        <p>Email: {props.emp.email}</p>
        <div className='d-flex'>
          <button className='btn btn-sm btn-success mr-2' onClick={() => handleUpdateRecord(props.emp)}>Update</button>
          <button className='btn btn-sm btn-danger' onClick={() => handleDelete(props.emp.id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetail