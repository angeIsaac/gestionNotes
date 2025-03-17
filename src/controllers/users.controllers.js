import { sequelize } from "../db/connection.js";
import { Users} from "../db/models/users.js";

export const getAllUsers = async (req, res) => {
    try{
        const allUsers = await Users.findAll();
        return res.status(200).json(allUsers);
    }catch(err){
        return res.status(500).json(err);
    }
}

export const getUsersById = async (req, res) => {
    try{
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({"message": "No such user with id " + id});
        }
        const allUsers = await Users.findByPk(id);
        return res.status(200).json(allUsers);
    }catch (error){
        console.log(error)
    }
}

export const createUser = async (req, res) => {
    try{
        const users = await Users.create(req.body);
        return res.status(200).json(users);
    }catch (error){
        res.status(500).json({"message": "Error creating user with id " + error});
    }
}

export const updateUser = async (req, res) => {
    try{
        const id = req.params.id;
        const userUpdate = await Users.update(req.body, {
            where: {
                id: id,
            },
            returning: true,
        });
        return res.status(200).json(userUpdate);
    }catch (error){
        res.status(500).json({"message": "une erreur est survenue lors de mise ajour de l'utilisateur" + error});
    }
}

export const deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        if (!id) {
            return res.status(404).json({"message": "No such user with id " + id});
        }
        const deletUser = await Users.destroy({
            where: {
                id: id
            }
        })
        return res.status(200).json({deletUser, message: "supression reussir"});
    }catch (error){
        res.status(500).json({"message": "Error deleting user with id " + error});
    }
}