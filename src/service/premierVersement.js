import { Versement } from "../db/models/versement.js";
import {Inscription} from "../db/models/inscription.js";

export const premierVersement = async (data, etudiantId) => {
    try{
        if(!data) throw new Error("Data doesn't exist");
        const inscription = await Inscription.findOne({
            where: {etudiantId: etudiantId}
        })
        if(!inscription) throw new Error("Inscription doesn't exist");
        await Versement.create({...data, inscriptionId: inscription.id});
    }catch (error) {
        console.log("erreur au niveau du versement: ", error);
        throw error;
    }
}