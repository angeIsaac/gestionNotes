import { Filiere } from "../db/models/filliere.js";
import { Classe } from "../db/models/classe.js";
import {deleteCache, miseEncache, valeurCache} from "../utils/cache.js";
import {pagination} from "../utils/pagination.js";

export const createClasse = async (req, res) => {
    try{
        const data = req.body;
        const classes = await Classe.create(data);
        res.status(201).json(classes);
    }catch (error){
        res.status(500).json({error: error});
    }
}

export const updateClasse = async (req, res) => {
    try{
        const data = req.body;
        const id = req.params.id;
        if(!id) return res.status(400).json({error: 'invalide id'});
          await Classe.update(data, {
            where: {id: id},
          })
        const classeUpdate = await Classe.findOne({
            where: {id: id},
            include: {
                model: Filiere,
                as: "filiere"
            }
        })
        if(await valeurCache("" + id)) await miseEncache("" + id, 86400, classeUpdate);
        res.status(200).json(classeUpdate);
    }catch (error){
        res.status(500).json({error: error});
    }
}

export const deleteClasse = async (req, res) => {
    try{
        const id = req.params.id;
        if(!id){
            return res.status(400).json({error: 'invalide id'});
        }
        if(await valeurCache("" + id)) await deleteCache(id);
        const classeDeleted = await Classe.destroy({where: {id: id}});
        res.status(200).json(classeDeleted);
    }catch (error){
        res.status(500).json({error: error});
    }
}

export const getAllClasses = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const { count, rows: classes } = await pagination(req, Classe, page);
        res.status(200).json({count, "classes": classes});
    }catch (error){
        res.status(500).json({error: error});
    }
}

export const getClasseById = async (req, res) => {
    try{
        const id = req.params.id;
        if(!id) return res.status(400).json({error: 'invalide id'});
        const cacheValeur = await valeurCache("" + id)
        if(cacheValeur) return res.status(200).json(JSON.parse(cacheValeur));

        const classes = await Classe.findOne({
            where: {id: id},
            include: {
                model: Filiere,
                as: "filiere",
            }
        });
        if(classes !== null && classes !== undefined) await miseEncache("" + id, 86400, classes);
        return res.status(200).json(classes);
    }catch (error){
        res.status(500).json({error: error});
    }
}