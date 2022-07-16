import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AddEmployee.css';
import baseUrl from '../API/BaseUrl';

const AddEmployee = (props) => {
  const [empId, setEmpId] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmpId(props.editEmpRecord.id);
    setFname(props.editEmpRecord.first_name);
    setLname(props.editEmpRecord.last_name);
    setEmail(props.editEmpRecord.email);
  }, [props.editEmpRecord.id, props.editEmpRecord.fname, props.editEmpRecord.lname, props.editEmpRecord.email]);


  const handleFirstName = (e) => {
    setFname(e.target.value);
  }

  const handleLastName = (e) => {
    setLname(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const addEmployee = (newEmployee) => {
    axios.post(baseUrl, newEmployee).then((res) => {
      console.log(res);
      props.getEmployeeList()
    }
    ).catch(err => console.log(err));
  }

  const updateEmployee = (newEmployee) => {
    axios.put(`${baseUrl}/${empId}`, newEmployee).then((res) => {
      console.log(res);
      props.isUpdateEmpRecord(false);
      props.getEmployeeList()
    }).catch(err => console.log(err));
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      first_name: fname,
      last_name: lname,
      email: email
    }
    if (!props.isEmpUpdate) {
      addEmployee(newEmployee);
    } else {
      updateEmployee(newEmployee);
    }
    setFname('');
    setLname('');
    setEmail('');
  }


  return (
    <div className='add-employee sm-wrapper'>
      <div className="container">
        <h3 className='text-center mb-4'>Axios Crud</h3>
        <form onSubmit={handleFormSubmit}>
          <div className='form-group'>
            <label htmlFor="fName">Employee First Name</label>
            <input type="text" value={fname || ''} className='form-control' id="fName" placeholder='Employee First Name' onChange={handleFirstName} />
          </div>
          <div className="form-group">
            <label htmlFor="lName">Employee Lasst Name</label>
            <input type="text" value={lname || ''} className='form-control' id="lName" placeholder='Employee Last Name' onChange={handleLastName} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Employee Email</label>
            <input type="text" value={email || ''} className='form-control' id="email" placeholder='Employee Email' onChange={handleEmail} />
          </div>
          {
            props.isEmpUpdate ? (
              <button type='submit' className='btn btn-secondary'>Update</button>
            ) : (
              <button type='submit' className='btn btn-success'>Submit</button>
            )
          }
        </form>
      </div>
    </div>
  )
}

export default AddEmployee;