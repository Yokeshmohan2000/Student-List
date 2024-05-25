// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getStudents = () => api.get('/students');
export const addStudent = (student: any) => api.post('/students', student);
export const updateStudent = (id: string, student: any) => api.put(`/students/${id}`, student);
export const deleteStudent = (id: string) => api.delete(`/students/${id}`);
