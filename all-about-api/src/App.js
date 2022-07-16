import { useEffect, useState } from 'react';
import './App.css';
import EmployeeList from './component/EmployeeList/EmployeeList';
import axios from 'axios';
import AddEmployee from './component/AddEmployee/AddEmployee';
import baseUrl from './component/API/BaseUrl';

function App() {
  const [empList, setEmpList] = useState([]);  
  const [editEmpRecord,setEditEmpRecord]=useState("");
  const [isEmpUpdate,setIsEmpUpdate]=useState(false);
  

  const getEmployeeList = () => {
    axios.get(baseUrl).then(resp => setEmpList(resp.data)).catch(err => console.log(err));
  }
  
  useEffect(() => {
    getEmployeeList();
  }, []);
  

  const deleteRecord=(id)=> {
    alert('app.js : '+id);
    axios.delete(`${baseUrl}/${id}`).then(resp=> {
      console.log(resp)
      getEmployeeList()
    }).catch(err=> console.log(err));
  }

  const updateRecord=(selectedEmpData)=> {    
    setEditEmpRecord(selectedEmpData);
    setIsEmpUpdate(true);
  }

  const isUpdateEmpRecord=(value)=> {
    setIsEmpUpdate(value);
  }

  return (
    <div className="App">      
      <AddEmployee getEmployeeList={getEmployeeList} editEmpRecord={editEmpRecord} isEmpUpdate={isEmpUpdate} isUpdateEmpRecord={isUpdateEmpRecord}/>
      <EmployeeList empList={empList}  deleteRecord={deleteRecord} updateRecord={updateRecord}/>
    </div>
  );
}

export default App;
