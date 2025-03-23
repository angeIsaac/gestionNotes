import { Etudiant } from "../db/models/etudiant.js";
import {Bulletins} from "../db/models/bulletins.js";
import {Notes} from "../db/models/notes.js";
import {Ue} from "../db/models/ue.js";
import {uniqueMatricule} from "../service/genereUniqueMatricule.js";


export const getEtudiants = async (req, res) => {
    try{
        const AllEtudiants = await Etudiant.findAll();
        res.status(200).json(AllEtudiants);
    }catch (error){
        console.log(error)
        res.status(500).json({"error": error});
    }
}

export const createEtudiant = async (req, res) => {
    try{
        const body = req.body;
        let { DateNaissance } = body;
        DateNaissance = new Date(DateNaissance);
        const matricule = await uniqueMatricule()
        const nouvelEtudiant = await Etudiant.create({
            ...body,
            matricule,
            DateNaissance,
        })
        res.status(201).json(nouvelEtudiant);
    }catch (error){
        res.status(500).json({"error": error.message});
    }
}

export const updateEtudiant = async (req, res) => {
    try{
        const id = req.params.id;
        if(!id){
            return res.status(404).json({"message": "Not Found"});
        }
        const body = req.body;
        const etudiantUpdate = await Etudiant.update(body, {
            where: {id: id},
            returning: true,
        })
        res.status(200).json(etudiantUpdate);
    }catch (error){
        res.status(500).json({"error": error});
    }
}

export const deleteEtudiant = async (req, res) => {
   try{
       const id = req.params.id;
       if(!id){
           return res.status(404).json({"message": "Not Found"});
       }
       const etudiantDelete = await Etudiant.destroy({where: {id: id}});
       res.status(200).json({"message": "Deleted Etudiant", etudiantDelete});
   }catch (error){
       res.status(500).json({"error": error});
   }
}

export const getEtudiantById = async (req, res) => {
    try{
      const id = req.params.id;
      if(!id){
          return res.status(404).json({"message": "Not Found"});
      }
      const etudiant = Etudiant.findByPk(id)
        res.status(200).json(etudiant);
    }catch (error){
        res.status(500).json({"error": error});
    }
}