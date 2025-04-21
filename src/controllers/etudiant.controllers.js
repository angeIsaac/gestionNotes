import { Etudiant } from "../db/models/etudiant.js";
import {uniqueMatricule} from "../service/genereUniqueMatricule.js";
import { convertToB64, deleteFile } from "../midllware/convertImageToBinary.js";
import {getClasse} from "./classe.controllers.js";
import {calculeMontant, inscriptions} from "../service/inscriptions.js";
import {premierVersement} from "../service/premierVersement.js";
import {Classe} from "../db/models/classe.js";
import {Bulletins} from "../db/models/bulletins.js";
import {Notes} from "../db/models/notes.js";



export const getEtudiants = async (req, res) => {
    try{
        const allEtudiants = await Etudiant.findAll();
        res.status(200).json(allEtudiants);
    }catch (error){
        console.log(error)
        res.status(500).json({"error": error});
    }
}

export const createEtudiant = async (req, res) => {
    try{
        let {dateIncription, montantPayer, ...data} = req.body;
        if(( !dateIncription && !( new Date(dateIncription).getTime()) ) || !montantPayer ){
            return res.status(400).json({"error": "Invalid date incription"});
        }
        const classe = await getClasse(data.classeId);
        console.log(" la classe de l'etudiant: " ,classe)
        if(!classe) return res.status(400).json({"error": "la classe est vide"});
        let { DateNaissance } = data;
        if(!DateNaissance || !(new Date(DateNaissance).getTime())) {
            return res.status(400).json({"error": "la date est invalide"});
        }

        DateNaissance = new Date(DateNaissance);
        const matricule = await uniqueMatricule()
        var nouvelEtudiant = await Etudiant.create({
            ...data,
            matricule,
            DateNaissance,
        })
        console.log("l'etudiant recement creer: " ,nouvelEtudiant)
        await inscriptions(nouvelEtudiant, classe, calculeMontant, montantPayer, dateIncription);
        await premierVersement({
            "montant": montantPayer,
            "dateVersement": new Date(dateIncription)
        }, nouvelEtudiant.id)
        res.status(201).json(nouvelEtudiant);
    }catch (error){
       if(nouvelEtudiant){
           await Etudiant.destroy({where: {id: nouvelEtudiant.id}})
       }
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
           include: [
               {
                   model: Classe,
                   through: {
                       attributes: ["classId", "soldee", "montantRestant"],
                   }
               },
               {
                   model: Bulletins,
                   as: "bulletins",
               },
               {
                   model: Notes,
                   as: "notes",
               }
           ]
       })
        res.status(200).json(etudiant);
    }catch (error){
        res.status(500).json({"error": error});
    }
}