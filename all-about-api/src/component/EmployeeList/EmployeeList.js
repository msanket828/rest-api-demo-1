import React from 'react'
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail';
import './EmployeeList.css';


const EmployeeList = (props) => {

  const deleteRecord=(id)=> {
    props.deleteRecord(id);
  }

  const updateRecord=(selectedEmpData)=> {
    props.updateRecord(selectedEmpData);
  }

  return (
    <div className='employee-list lg-wrapper'>
      <div className='container'>        
          {
            props.empList.map((emp) => {
              return (
                <EmployeeDetail key={emp.id} emp={emp}  deleteRecord={deleteRecord} updateRecord={updateRecord}/>
              )
            })
          }
      </div>
    </div>
  )
}

export default EmployeeList;