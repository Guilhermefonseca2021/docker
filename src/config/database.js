import { Sequelize } from "sequelize"

const db = new Sequelize("usersdb", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

export default db