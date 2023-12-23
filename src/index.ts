import express from "express";
import sequelize from "./models";

// Initialize the express engine
const app: express.Application = express();

// Take a port 5000 for running server.
const port: number = 3000;

app.use(express.json());

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// Handling '/' Request
app.get("/", (_req, _res) => {
  _res.send("Hello world");
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
