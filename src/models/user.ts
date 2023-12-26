import { DataTypes } from "sequelize";
import sequelize from "./index";

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here

    // Here by default Id column will be created with primary key and autoIncrement: true

    firstName: {
      type: DataTypes.STRING,
      // Constraint
      allowNull: false,
      // Validation
      validate: {
        isAlpha: true,
        len: [2, 15],
      },
      // Example of get()..
      get() {
        const rawValue = this.getDataValue("firstName");
        return rawValue ? rawValue.toUpperCase() : null;
      },
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
      set(value) {
        // "Halum" will be added in everyone's last name :v
        this.setDataValue("lastName", value + " halum");
      },
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 23,
    },
    //Example of Virtual
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.getDataValue("firstName")} ${this.getDataValue(
          "lastName"
        )}`;
      },
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
// console.log(User === sequelize.models.User); // true

export default User;
