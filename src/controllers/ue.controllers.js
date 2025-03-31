import { Ue } from "../db/models/ue.js";

export const getAllUe = async (req, res) => {
    try{
        return res.status(200).json(await Ue.findAll());
    }catch(err){
        res.status(500).send({error: err});
    }
}

export const getUeById = async (req, res) => {
    if(!req.params.id) return res.status(404).send({error: "Not Found"});
    return res.status(200).json(await Ue.findByPk(req.params.id));
}

export const updateUe = async (req, res) => {
    try{
        if(!req.params.id) return res.status(404).json({error: "Not Found"});
        return res.status(200).json(await Ue.update(req.body,{
            where: {id: req.params.id},
            returning: true,
        } ));
    }catch(err) {
        res.status(500).send({error: err});
    }
}

export const deleteUe = async (req, res) => {
    try{
        if(!req.params.id) return res.status(404).send({error: "Not Found"});
        return res.status(200).json(await Ue.destroy({where: {id: req.params.id}}));
    }catch (err){
        res.status(500).send({error: err});
    }
}

export const createUe = async (req, res) => {
    try{
        return res.status(201).json(await Ue.create(req.body));
    }catch(err){
        res.status(500).send({error: err});
    }
}