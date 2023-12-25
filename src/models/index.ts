import { Sequelize } from "sequelize";
import User from "./user";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("api-practice", "postgres", "sayem2017", {
  host: "localhost",
  dialect: "postgres",
});

// // Testing database connection..
// try {
//   sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

export default sequelize;
