import express from 'express';
import {
    createEnseignant, deleteEnseignant,
    getAllEnseignants,
    getEnseignantById,
    updateEnseignant
} from "../controllers/enseignant.controllers.js";

const router = express.Router();

router.get("/get-all-enseignants", getAllEnseignants)
router.get("/get-enseignant/:id", getEnseignantById)
router.post("/create-enseignant", createEnseignant)
router.put("/update-enseignant/:id", updateEnseignant)
router.delete("/delete-enseignant/:id", deleteEnseignant)

export default router;