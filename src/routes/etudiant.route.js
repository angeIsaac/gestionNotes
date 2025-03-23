import express from "express";
import {createEtudiant, deleteEtudiant, getEtudiants, updateEtudiant} from "../controllers/etudiant.controllers.js";


const router = express.Router();

router.get("/get-all-etudiants", getEtudiants);
router.post("/create-etudiant", createEtudiant);
router.delete("/delete-etudiant/:id", deleteEtudiant);
router.put("/update-etudiant/:id", updateEtudiant);

export default router;