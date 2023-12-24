import express from "express";
import sequelize from "./models";
import User from "./models/user";

// Initialize the express engine
const app: express.Application = express();

// Take a port 5000 for running server.
const port: number = 3000;

app.use(express.json());

// Testing database connection..
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// ---------Model synchronization or you can say creating table in DB by model----------
// User.sync({force: true});   // create again; if exist then first alter then create
// User.sync({alter: true});   // create only where changes
User.sync(); // create if not exist

// --------------Drop table---------------
// User.drop();

// Handling '/' Request
app.get("/", (_req, _res) => {
  _res.send("Hello world");
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
