import { Router } from "express";
import { createUser, deleteUser, getAllUsers } from "./controllers/userControllers.js";

const routes = Router();

routes.post("/cadastro", createUser)
routes.get("/", getAllUsers)
routes.delete("/deletar", deleteUser)

export default routes;
