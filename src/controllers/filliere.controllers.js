import { Filiere } from "../db/models/filliere.js";

export const getAllFilliere = async (req, res) => {
    try{
        const allFilliere = await Filiere.findAll();
        res.status(200).json(allFilliere);
    }catch (error){
        res.status(500).json({error: error});
    }
}

export const getFilliere = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(404).json({"error": "No such filliere"});
        }
        const fillieres = await Filiere.findByPk(id)
        res.status(200).json(fillieres);
    }catch (error){
        res.status(500).json({error: error});
    }
}

export const createFilliere = async (req, res) => {
    try {
        const data = req.body;
        const newFilliere = await Filiere.create(data);
        res.status(200).json(newFilliere);
    }catch (error){
        res.status(500).json({error: error});
    }
}

export const updateFilliere = async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id;
        if (!id) {
            res.status(404).json({"error": "No such filliere"});
        }
        const filliereUpdate = await Filiere.update(data, {
            where: {id: id},
            returning: true,
        })
        res.status(200).json(filliereUpdate);
    }catch (error){
        res.status(500).json({error: error});
    }
}

export const deleteFilliere = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(404).json({"error": "No such filliere"});
        }
        const deletedFilliere = await Filiere.destroy({where: {id: id}});
        res.status(200).json(deletedFilliere);
    }catch (error){
        res.status(500).json({error: error});
    }
}