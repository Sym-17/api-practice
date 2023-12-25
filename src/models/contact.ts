import { DataTypes } from "sequelize";
import sequelize from "./index";

const Contact = sequelize.define(
  "Contact",
  {
    presentAddress: {
      type: DataTypes.STRING,
      field: "present_address",
      allowNull: false,
    },
    permanentAddress: {
      type: DataTypes.STRING,
      field: "permanent_address",
      defaultValue: "same as present",
    },
    phoneNo: {
      type: DataTypes.STRING,
      field: "phone_number",
    },
  },
  {
    timestamps: false,
  }
);

export default Contact;
