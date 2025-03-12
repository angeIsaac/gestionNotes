import { sequelize } from "../db/connection.js";
import { Users} from "../db/models/users.js";

export const getAllUsers = async (req, res) => {
    const allUsers = await Users.findAll();
    return res.status(200).json(allUsers);
}

export const getUsersById = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(404).json({"message": "No such user with id " + id});
    }
    const allUsers = await Users.findByPk(id);
    return res.status(200).json(allUsers);
}

export const createUser = async (req, res) => {
    const users = await Users.create(req.body);
    return res.status(200).json(users);
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
   const userUpdate = await Users.update(id, req.body);
   return res.status(200).json(userUpdate);
}