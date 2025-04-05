import { Bulletins } from "../db/models/bulletins.js";
import {Classe} from "../db/models/classe.js";
import {Etudiant} from "../db/models/etudiant.js";

export const createBulletins = async (req, res) => {
    try{
        return res.status(201).json(await Bulletins.create(req.body));
    }catch (err){
        res.status(500).json(err)
    }
}

export const deleteBulletin = async (req, res) => {
    try {
        return res.status(201).json(await Bulletins.destroy({where: {id: req.params.id}}));
    }catch (err){
        res.status(500).json(err)
    }
}
export const updateBulletin = async (req, res) => {
    try {
        return res.status(200).json(await Bulletins.update(req.body, {
            where: {id: req.params.id},
            returning: true,
        }));
    }catch (err){
        res.status(500).json(err)
    }
}

export const getAllBulletins = async (req, res) => {
    try {
        return res.status(200).json(await Bulletins.findAll())
    }catch (err){
        res.status(500).json(err)
    }
}

export const getBulletinById = async (req, res) => {
    try{
        return res.status(200).json(await Bulletins.findByPk(req.params.id, {
            include: [
                {model: Classe, as: "classes"},
                {model: Etudiant, as: "etudiant"},
            ]
        }))
    }catch (err){
        res.status(500).json(err)
    }
}