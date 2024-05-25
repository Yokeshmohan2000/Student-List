"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = __importDefault(require("../models/student"));
const router = (0, express_1.Router)();
// Create a new student
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = new student_1.default(req.body);
        yield student.save();
        res.status(201).send(student);
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
// Get all students
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_1.default.find();
        res.status(200).send(students);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
// Get a student by ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_1.default.findById(req.params.id);
        if (!student) {
            return res.status(404).send();
        }
        res.status(200).send(student);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
// Update a student by ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) {
            return res.status(404).send();
        }
        res.status(200).send(student);
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
// Delete a student by ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield student_1.default.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).send();
        }
        res.status(200).send(student);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.default = router;
