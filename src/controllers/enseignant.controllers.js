import { Enseignant } from "../db/models/enseignant.js";
import {convertToB64, deleteFile} from "../midllware/convertImageToBinary.js";

export const getAllEnseignants = async (req, res) => {
    try{
        const allEnseignat = await Enseignant.findAll();
        res.status(200).json(allEnseignat);
    }catch(err){
        return res.status(400).json({"erreur": err.message});
    }
}

export const getEnseignantById = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(404).json({"error": "Not Found"})
        }
        const enseignant = await Enseignant.findByPk(id);
        res.status(200).json(enseignant);
    }catch (err){
        return res.status(500).json({"error": err})
    }
}

export const createEnseignant = async (req, res) => {
    try {
        let data = req.body;
        const file = req.file;
        if(file){
            const image = await convertToB64(file.path);
            await deleteFile(file.path);
            data = {...data, image};
        }
        const enseignant = await Enseignant.create(data);
        res.status(200).json(enseignant);
    }catch (err){
        return res.status(500).json({"error": err.message})
    }
}

export const updateEnseignant = async (req, res) => {
    try{
        const id = req.params.id;
        const data = req.body;
        if(!id){
            res.status(404).json({"error": "Not Found"})
        }
        const newEnseignant = await Enseignant.update(data, {
            where: {id: id},
            returning: true
        });
        res.status(200).json(newEnseignant);
    }catch (err){
        return res.status(500).json({"error": err})
    }
}


export const deleteEnseignant = async (req, res) => {
    try{
        const id = req.params.id;
        if(!id){
            res.status(404).json({"error": "Not Found"})
        }
        const deleteEneseignant = await Enseignant.destroy({
            where: {id: id},
        });
        res.status(200).json(deleteEneseignant);
    }catch (err){
        return res.status(500).json({"error": err})
    }
}