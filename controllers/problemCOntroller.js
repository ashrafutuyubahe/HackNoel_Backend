const ProblemModel = require("../models/IssueModel");
const jwt = require("jsonwebtoken");
const { Op, Sequelize, where } = require("sequelize");
const bcrypt = require("bcrypt");
const logger = require("../utils/logger");

exports.ReportProblem = async (req, res) => {
  try {
    const { problemTitle, problemDescription, ProblemReporter } = req.body;

    const ExistingProblem = await ProblemModel.findAll({ ProblemReporter });

    if ((!problemTitle, !problemDescription, !ProblemReporter)) {
      return res.status(401).send("all fields are required please");
    }

    const saveProblem = await ProblemModel.create({
      problemTitle,
      problemDescription,
      ProblemReporter,
    });

    if (!saveProblem) {
      return res.status(401).send("failed to report your problem ");
    }

    res.status(201).json({ message: "Problem reported sucessfully" });
  } catch (error) {
    logger.error("Error while Reporting the problem", err);
    res.status(500).send("internal server eror ");
  }
};

exports.GetAllProblems = async (req, res) => {
  try {
    const problems = await ProblemModel.findAll();

    if (!problems) {
      return res.status(401).send("Error while  getting problems");
    }

    res.status(200).json({ problems });
  } catch (err) {
    logger.error("Error getting problems :", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.GetProblemsByCategory = async (req, res) => {
  const { adminRole } = req.body;

  

     const  RetrieveProblemes= (adminRole)=>{

  
    
    
    

     }

  switch (adminRole) {
    case "ESS":
      RetrieveProblemes(adminId);

      break;
    case "M":
      RetrieveProblemes(adminId);

      break;
    case "VMED":
      RetrieveProblemes(adminId);

      break;
    case "VMSA":
      RetrieveProblemes(adminId);

      break;
    case "ESD":
      RetrieveProblemes(adminId);

      break;
    case "G":
      RetrieveProblemes(adminId);

      break;
    case "VMSAK":
      RetrieveProblemes(adminId);

      break;
    case "VMEDK":
      RetrieveProblemes(adminId);

      break;
    case "VMSAK":
      RetrieveProblemes(adminId);
      break;

    default:
      logger.warn("no valid admin role provided");
      res.status(401).send("No valid admin role provided");
  }
};

exports.logOutAdmin = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(400).json({
        message: "No token provided in the request header",
        error: true,
      });
    }

    const tokenValue = token.split(" ")[1];

    jwt.verify(tokenValue, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Unauthorized, token is invalid or already logged out",
          error: true,
        });
      }

      res.clearCookie("token");

      return res.status(200).json({
        message: "Successfully logged out. Token invalidated.",
        error: false,
      });
    });
  } catch (err) {
    logger.error("Error logging out admin:", err);
    return res.status(500).json({
      message: "Internal server error",
      error: true,
    });
  }
};

function generateJWT(admin) {
  return jwt.sign({ adminId: admin.id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

exports.getGreetings = async (req, res) => {
  return res.status(200).json({ message: "Helloo there.." });
};
