import { Users} from "../db/models/users.js";
import {deleteCache, miseEncache, valeurCache} from "../utils/cache.js";
import {pagination} from "../utils/pagination.js";

export const getAllUsers = async (req, res) => {
    try{
        const page  = parseInt(req.query.page) || 1;
        const {count, rows: allUsers} = await pagination(req, Users, page)
        return res.status(200).json({count, "users": allUsers});
    }catch(err){
        return res.status(500).json(err);
    }
}

export const getUsersById = async (req, res) => {
    try{
        const id = req.params.id;       // recuperation de l'identifiant
        if (!id) {
            // verifie si l'identifiant existe ou n'est pas null
            // si l'identifiant est null on retourne un message d'erreur
            return res.status(404).json({"message": "No such user with id " + id});
        }

        //on verifie pour voir si la valeur n'existe pas en cache
        const valeurEnCache = await valeurCache("" + id);

        // si la valeur existe on retourne la valeur
        if(valeurEnCache){
            return res.status(200).json(JSON.parse(valeurEnCache));
        }
        // sinon on execute la requette
        const allUsers = await Users.findByPk(id);
        console.log(" la valeur dans la base de données " + allUsers);
        // on verifie encore si l'identifiant corespond a un valeur dans la base de données
        if(!allUsers){
            return res.status(404).json({"message": "aucune valeur ne correspond a cet identifiant " + id});
        }
        // si la valeur existe on la met en cache et retourne le resultat
        await miseEncache("" + id, 86400, allUsers);
        return res.status(200).json(allUsers);
    }catch (error){
        console.log(error)
    }
}

export const createUser = async (req, res) => {
    try{
        const data = req.body
        const users = await Users.create(data);
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
        if(await valeurCache("" + id)){
            await miseEncache("" + id, 86400, userUpdate);
        }
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
        if(await valeurCache("" + id)){
            await deleteCache("" + id)
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