const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Admin = sequelize.define('Admin', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  adminName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  adminEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  adminPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Role:{
    allowNull:false,
    type:DataTypes.ENUM,
     values: ["ESS","M","VMED","VMSA","ESD","G","VMSAK","VMEDK","VMSAK"]

  }

}, 
{
  timestamps: true,
});



module.exports = Admin;
