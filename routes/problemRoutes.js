const express = require('express');
const router = express.Router();
const ProblemControler = require('../controllers/problemCOntroller');

const registerSwagger = require('../swagger/register&loginSwagger');


router.post('/register', authController.registerAdmin);

router.post('/ReportProblem', ProblemControler.ReportProblem);
router.get("/GetAllProblems",ProblemControler.GetAllProblems); 
router.get("/getProblemBYCategory",ProblemControler.GetProblemsByCategory); 

router.get("/greetings",authController.getGreetings);
 
module.exports = router;    