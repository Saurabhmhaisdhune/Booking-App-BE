import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router= express.Router();

//updates
router.put("/:id",updateUser);

//delete
router.delete("/:id", deleteUser);

//get
router.get("/:id",getUser);

//get all
router.get("/",getUsers);

export default router