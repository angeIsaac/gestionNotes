import express from "express";
import {
    createBulletins,
    deleteBulletin,
    getAllBulletins,
    getBulletinById,
    updateBulletin
} from "../controllers/bulletins.controllers.js";

const router = express.Router();

router.get("/all-bulletins", getAllBulletins);
router.get("/bulletins-by-id/:id", getBulletinById);
router.put("/update-bulletins", updateBulletin);
router.delete("/delete-bulletin/:id", deleteBulletin);
router.post("/create-bulletins", createBulletins);

export default router;