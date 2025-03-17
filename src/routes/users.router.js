import express from "express"
import {
    getUsersById,
    updateUser,
    getAllUsers,
    createUser, deleteUser
} from "../controllers/users.controllers.js"

const router = express.Router();

router.get("/get-all-users", getAllUsers)
router.get("/get-user/:id", getUsersById)
router.post("/create-user", createUser)
router.put("/update-user/:id", updateUser)
router.delete("/delete-user/:id", deleteUser)

export default router;

