import express from "express";
import {
    createEtudiant,
    deleteEtudiant,
    getEtudiantById,
    getEtudiants,
    updateEtudiant
} from "../controllers/etudiant.controllers.js";
import { upload } from "../midllware/uploadEtudiantFile.js";


const router = express.Router();

router.get("/get-all-etudiants", getEtudiants);
router.post("/create-etudiant", upload.single("image"), createEtudiant);
router.delete("/delete-etudiant/:id", deleteEtudiant);
router.put("/update-etudiant/:id", updateEtudiant);
router.get("/get-etudiant/:id", getEtudiantById)

export default router;