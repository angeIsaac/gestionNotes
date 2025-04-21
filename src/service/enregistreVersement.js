import { Versement } from "../db/models/versement.js";
import { Inscription } from "../db/models/inscription.js";
import { sequelize } from "../db/connection.js";


export const enregistreVersement = async body => {
    const transaction = await sequelize.transaction()
    try {
        const { etudiantId, ...data } = body

        //on recupere l'inscription qui corespond au versement
        const inscription = await Inscription.findOne( {
            where: {etudiantId},
            transaction,
        })
        if (!inscription) throw new Error("Inscrition not found");
        // on enregistre un versement;
        const versement = await Versement.create({
            ...data,
            inscriptionId: inscription.id,
            dateVersement: new Date(data.dateVersement)},
            {transaction})

        // mise ajour de l'inscription
        const nouveauMontantRestant = Math.max(inscription.montantRestant - data.montant, 0);
        await inscription.update({
            montantRestant: nouveauMontantRestant,
            soldee: nouveauMontantRestant === 0
        }, {transaction})

        // commit
        await transaction.commit();
        return versement;
    }catch (error) {
        // si il y'a une erreur on annule tout avec rollback().
        await transaction.rollback();
        throw error;
    }
}
