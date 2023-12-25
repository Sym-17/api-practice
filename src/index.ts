import express from "express";
import sequelize from "./models";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "./controller/userController";
// import User from "./models/user";
// import Contact from "./models/contact";
const User = require("./models/user");
const Contact = require("./models/contact");

// Initialize the express engine
const app: express.Application = express();

// Take a port 5000 for running server.
const port: number = 3000;

app.use(express.json());

//All model sync() at a time
(async () => {
  await sequelize.sync();
  // this did not work for ESM (import), rather than Common JS(require)
})();

// ---------Model synchronization or you can say creating table in DB by model----------
// eita abar Common JS e cholteche na...kire vai ajob kotha
(async () => {
  // await User.sync({ force: true }); // create again; if exist then first alter then create
  // await User.sync({alter: true});   // create only where changes
  // await User.sync(); // create if not exist
  // await Contact.sync(); // create if not exist
})();

// --------------Drop table---------------
// User.drop();

// Handling '/' Request
app.get("/", (_req, _res) => {
  _res.send("Hello world");
});

// Crud Operations
app.post("/add-user", addUser);

app.get("/user", getUsers);

app.get("/user/:id", getUser);

app.patch("/user/:id", editUser);

app.delete("/user/:id", deleteUser);

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express 
		http://localhost:${port}/`);
});
