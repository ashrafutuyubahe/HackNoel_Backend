const { DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/db'); 

const Citizen = sequelize.define('Citizen', {
  CitizenId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CitizenName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  CitizenEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  CitizenPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  CitizenLocation:{
    type:DataTypes.STRING,
    allowNull:false,

  },
  CitizenContacts_PhoneNumber:{
    type:DataTypes.STRING,
    allowNull: false,
    unique: true
  }
 

}, 
{
  timestamps: true,
});



module.exports = Admin;
