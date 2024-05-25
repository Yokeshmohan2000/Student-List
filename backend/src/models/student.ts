// src/models/student.ts
import { Schema, model } from 'mongoose';

interface IStudent {
  name: string;
  email: string;
  phone: string;
  entrollNumber: string;
  dateOfAdmission: Date;
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  entrollNumber: { type: String, required: true },
  dateOfAdmission: { type: Date, required: true },
});

const Student = model<IStudent>('Student', studentSchema);
export default Student;
