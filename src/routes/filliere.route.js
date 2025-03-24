import express from "express";
import {
    createFilliere,
    deleteFilliere,
    getAllFilliere,
    getFilliere,
    updateFilliere
} from "../controllers/filliere.controllers.js";

const router = express.Router();

router.get("/get-all-fillieres", getAllFilliere)
router.get("/filliere/:id", getFilliere);
router.delete("/delete-filliere/:id", deleteFilliere);
router.put("/update-filliere/:id", updateFilliere);
router.post("/create-filliere", createFilliere);

export default router;