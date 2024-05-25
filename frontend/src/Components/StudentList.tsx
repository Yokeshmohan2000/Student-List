// src/components/StudentList.tsx
import React, { useEffect, useState } from 'react';
import { getStudents, deleteStudent } from '../services/api';
import { Button, List, ListItem, ListItemText } from '@mui/material';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response.data);
  };

  const handleDelete = async (id: string) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <List>
      {students.map((student: any) => (
        <ListItem key={student.id}>
          <ListItemText
            primary={`${student.name} (${student.enrollNumber})`}
            secondary={`Email: ${student.email}, Phone: ${student.phone}, Date of Admission: ${new Date(student.dateOfAdmission).toLocaleDateString()}`}
          />
          <Button onClick={() => handleDelete(student.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default StudentList;
