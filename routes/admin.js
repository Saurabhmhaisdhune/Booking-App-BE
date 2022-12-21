import express from "express";
import {adminLogin, adminRegister } from "../controllers/admin.js";

const router= express.Router();

router.post("/adminlogin",adminLogin)
router.post("/adminregister",adminRegister)


export default router