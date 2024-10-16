import express from "express";
import routes from "./routes.js";
import db from "./config/database.js";

const app = express();
app.use(express.json());

app.use("/usuarios", routes);

db.authenticate() 
  .then(() => {
    app.listen(3333, () => console.log("Server is running! 🚀"));
  })
  .catch((err) => console.log(err));
 