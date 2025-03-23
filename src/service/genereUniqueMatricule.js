import crypto from "crypto";
import {Etudiant} from "../db/models/etudiant.js";

export const uniqueMatricule = async () => {
    let matricule;
    let exists = true;
    while (exists) {
        matricule = (crypto.randomInt(10000000, 99999999)).toString();
        console.log(matricule);
        const existingEtudiant = await Etudiant.findOne({where: { matricule }})
        exists = existingEtudiant !== null;
    }
    return matricule;
}