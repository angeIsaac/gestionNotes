import express from 'express';
import {createUe, deleteUe, getAllUe, getUeById, updateUe} from "../controllers/ue.controllers.js";


const router = express.Router();

router.get("/get-all-ue", getAllUe);
router.get("/get-ue/:id", getUeById);
router.delete("/delete-ue/:id", deleteUe)
router.put("/update-ue/:id", updateUe);
router.post("/create-ue", createUe);

export default router;