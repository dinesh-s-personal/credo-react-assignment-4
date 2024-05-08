import React from 'react';
import './App.css';
import { StudentForm } from './StudentForm';
import { StudentListContext } from './Context/StudentContext';

function App() {

  const [form, setForm] = React.useState({});
  const [studentList, setStudentList] = React.useState([]);

  return (
    <div className="App">
      <StudentListContext.Provider value={{ form, setForm, studentList, setStudentList }}>
        <StudentForm />
      </StudentListContext.Provider>
    </div>
  );
}

export default App;
