import express from "express";
import {
    createClasse,
    deleteClasse,
    getAllClasses,
    getClasseById,
    updateClasse
} from "../controllers/classe.controllers.js";

const router = express.Router();

router.get("/get-all-classe", getAllClasses);
router.get("/get-classe/:id", getClasseById);
router.post("/create-classe", createClasse)
router.put("/update-classe/:id", updateClasse);
router.delete("/delete-classe/:id", deleteClasse);

export default router;