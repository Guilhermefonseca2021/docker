import UserModel from "../models/UserModel.js";
import crypto from "node:crypto";

export async function createUser(req, res) {
  //   const { name, age, email } = req.body;
  const userToCreate = {
    id: crypto.randomUUID,
    ...req.body.name,
  };
  try {
    const user = await UserModel.create(userToCreate);
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllUsers(req, res) {
  res.status(200).json({ message: "Deu bom." });
}

export async function deleteUser(req, res) {
  res.status(200).json({ message: "Deu bom." });
}
