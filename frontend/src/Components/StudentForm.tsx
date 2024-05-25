// src/components/StudentForm.tsx
import React, { useState } from 'react';
import { addStudent } from '../services/api';
import { Button, TextField } from '@mui/material';

const StudentForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enrollNumber, setEnrollNumber] = useState('');
  const [dateOfAdmission, setDateOfAdmission] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addStudent({ name, email, phone, enrollNumber, dateOfAdmission });
    setName('');
    setEmail('');
    setPhone('');
    setEnrollNumber('');
    setDateOfAdmission('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <TextField label="Enroll Number" value={enrollNumber} onChange={(e) => setEnrollNumber(e.target.value)} />
      <TextField
        label="Date of Admission"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={dateOfAdmission}
        onChange={(e) => setDateOfAdmission(e.target.value)}
      />
      <Button type="submit">Add Student</Button>
    </form>
  );
};

export default StudentForm;
