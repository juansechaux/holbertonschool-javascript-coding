import express from 'express';
// eslint-disable-next-line
import AppController from '../controllers/AppController.js';
// eslint-disable-next-line
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
