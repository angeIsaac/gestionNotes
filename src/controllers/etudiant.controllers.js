import { Etudiant } from "../db/models/etudiant.js";
import {uniqueMatricule} from "../service/genereUniqueMatricule.js";
import {convertToB64, deleteFile} from "../midllware/convertImageToBinary.js";


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
        let data = req.body;
        const file = req.file;
        console.log("l'image ", req.file);
        if (file) {
            console.log("le chemin de l'image", file.path)
            const image = await convertToB64(file.path);
            console.log("l'image ", image);
            await deleteFile(file.path);
            data = { ...data, image };
        }
        let { DateNaissance } = data;
        if(!DateNaissance || !(new Date(DateNaissance).getTime())) {
            return res.status(400).json({"error": "la date est invalide"});
        }
        DateNaissance = new Date(DateNaissance);
        const matricule = await uniqueMatricule()
        const nouvelEtudiant = await Etudiant.create({
            ...data,
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
       const etudiant = await Etudiant.findOne({
           where: {id: id},
       })
        res.status(200).json(etudiant);
    }catch (error){
        res.status(500).json({"error": error});
    }
}