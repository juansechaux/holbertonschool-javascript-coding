// eslint-disable-next-line
import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase('./database.csv');
      // eslint-disable-next-line
      let response = 'This is the list of our students\n';
      // eslint-disable-next-line
      for (const field in studentsByField) {
        response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      }
      response = response.slice(0, -1);
      res.status(200).send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase('./database.csv');
      const students = studentsByField[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
