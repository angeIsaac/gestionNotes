import express from "express";
import {createNotes, deleteNote, getAllNotes, getNoteById, updateNotes} from "../controllers/notes.controllers.js";

const router = express.Router();

router.post("/create-notes", createNotes);
router.put("/update-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNote);
router.get("/get-all-notes", getAllNotes);
router.get("/get-notes/:id", getNoteById)

export default router;
