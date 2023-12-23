import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("api-practice", "postgres", "sayem2017", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
