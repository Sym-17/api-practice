import { Sequelize, DataTypes } from "sequelize";
import sequelize from "./index";

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here

    // Here by default Id column will be created with primary key and autoIncrement: true

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 23,
    },
  },
  {
    // Other model options go here
    //   ----------Table naming---------------------
    //   freezeTableName: true,  // table name = model name
    //   tableName: 'User_employee'      // table name = "User_employee"
    //   otherwise table name will be pluralize
    // -----------timestamps------------------------
    //   By default, createAt and updatedAt column will be added into table
    //   timestamps: false, // Both col won't be added
    //   createdAt: false,   // Only createdAt won't be added
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

export default User;
