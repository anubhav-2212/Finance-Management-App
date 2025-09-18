import express from "express";
import { requireAuth } from "../middlewares/auth.middlewares.js";
import { addIncome, deleteIncome, downloadIncomeExcel, getAllIncome } from "../controllers/income.controller.js";
const incomeRoutes=express.Router();

incomeRoutes.get('/add',requireAuth,addIncome)
incomeRoutes.get('/get',requireAuth,getAllIncome)
incomeRoutes.get('/delete/:id',requireAuth,deleteIncome)
incomeRoutes.get('/downloadexcel',requireAuth,downloadIncomeExcel)

export default incomeRoutes