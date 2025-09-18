import express from "express";
import { requireAuth } from "../middlewares/auth.middlewares";
import { addIncome, deleteIncome, downloadIncomeExcel, getAllIncome } from "../controllers/income.controller";
const incomeRoutes=express.Router();

incomeRoutes.get('/add',requireAuth,addIncome)
incomeRoutes.get('/get',requireAuth,getAllIncome)
incomeRoutes.get('/delete/:id',requireAuth,deleteIncome)
incomeRoutes.get('/downloadexcel',requireAuth,downloadIncomeExcel)