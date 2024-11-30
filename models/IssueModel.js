const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

const IssueModel = sequelize.define(
  "Admin",
  {
    problemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    problemTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    problemDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ProblemReporter: {
      references:{
        model:Citizen,
         key:"CitizenId"
      }

    },
    ProblemStatus:
    {
        type:DataTypes.ENUM,
        values:["solved","seen","unseen"],
        allowNull:false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = IssueModel;
