const { Model, DataTypes } = require('sequelize');
const { truncate } = require('../config/connection.js');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Define Columns
    id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },

    categoric_name :{
      type: DataTypes.STRING,
      allowNull: false
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
