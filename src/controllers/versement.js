import { Versement } from "../db/models/versement.js";
import {Inscription} from "../db/models/inscription.js";
import {Etudiant} from "../db/models/etudiant.js";
import {Classe} from "../db/models/classe.js";
import {enregistreVersement} from "../service/enregistreVersement.js";

export const getVersement = async (req, res) => {
    return res.json(await Versement.findAll({
        include: [
            {
                model: Inscription,
                as: 'inscription',
                include: [
                    {
                        model: Etudiant,
                        as: 'etudiant'
                    },
                    {
                        model: Classe,
                        as: 'classe'
                    }
                ]
            }
        ]
    }))
}

export const getVersementById = (req, res) => {
    try{
        if(!req.id) return res.status(404).json({error: "l'identifiant n'existe pas"});
        return res.status(200).json(Versement.findByPk(req.id,{
            include: [
                {
                    model: Inscription,
                    as: 'inscription',
                    include: [
                        {
                            model: Etudiant,
                            as: 'etudiant'
                        },
                        {
                            model: Classe,
                            as: 'classe'
                        }
                    ]
                }
            ]
            }));
    }catch (error) {
        res.status(500).send({error: error.message});
    }
}

export const createVersement = async (req, res) => {
    try{
        const data  = req.body;
        if(!data) res.status(404).json({error: "la donnée n'existe pas"});
        const versement = await enregistreVersement(data)
        res.status(200).json(versement);
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const updateVersement = async (req, res) => {
    try {
        const { data } = req;
        const id  = req.params.id;
        if(!id) res.status(400).json({error: "l'identifiant n'existe pas"});
        res.status(200).json(await Versement.update(data, { where: {id: id},  returning: true, }))
    }catch (error) {
        res.status(500).send({error: error.message});
    }
}

export const deleteVersement = async (req, res) => {
    try{
        const { id } = req.params;
        if(!id) res.status(400).json({error: "l'identifiant n'existe pas"});
        res.status(200).json(await Versement.destroy({where: {id: id}}));
    }catch (error) {
        res.status(500).send({error: error.message});
    }
}



