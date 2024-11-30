const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const registerSwagger = require('../swagger/register&loginSwagger');


router.post('/register', authController.registerAdmin);

router.post('/ReportProblem', authController.loginAdmin);
router.post("/GetAllProblems",authController.logOutAdmin);
router.get("/",authController.getGreetings);

module.exports = router;    