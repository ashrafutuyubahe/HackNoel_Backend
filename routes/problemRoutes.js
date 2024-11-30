const express = require('express');
const router = express.Router();
const ProblemControler = require('../controllers/problemCOntroller');

const registerSwagger = require('../swagger/register&loginSwagger');


router.post('/register', authController.registerAdmin);

router.post('/ReportProblem', ProblemControler.ReportProblem);
router.get("/GetAllProblems",ProblemControler.GetAllProblems); 
router.get("/getProblem",ProblemControler.GetProblem); 

router.get("/greetings",authController.getGreetings);
 
module.exports = router;    