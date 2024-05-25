// src/App.tsx
import React from 'react';
import StudentForm from './Components/StudentForm';
import StudentList from './Components/StudentList';


const App: React.FC = () => {
  return (
    <div>
      <h1>Student List</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
};

export default App;
