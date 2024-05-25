"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    enrollmentNumber: { type: String, required: true },
    dateOfAdmission: { type: Date, required: true }
});
const StudentModel = (0, mongoose_1.model)('studentlist', studentSchema);
exports.default = StudentModel;
