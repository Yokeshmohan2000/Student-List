// src/controllers/studentController.ts
import { Request, Response } from 'express';
import Student from '../models/student';

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addStudent = async (req: Request, res: Response) => {
  const { name, email, phone, enrollNumber, dateOfAdmission } = req.body;
  const student = new Student({ name, email, phone, enrollNumber, dateOfAdmission });
  try {
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const { name, email, phone, enrollNumber, dateOfAdmission } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, { name, email, phone, enrollNumber, dateOfAdmission }, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
