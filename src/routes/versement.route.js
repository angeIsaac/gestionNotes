import express from "express";
import {
    createVersement,
    deleteVersement,
    getVersement,
    getVersementById,
    updateVersement
} from "../controllers/versement.js";

const router = express.Router();

router.get("/versement-get-all", getVersement);
router.get("/versement-by-id/:id", getVersementById);
router.put("/versement-update/:id", updateVersement);
router.delete("/delete-versement/:id", deleteVersement);
router.post("/create-versement", createVersement);

export default router;