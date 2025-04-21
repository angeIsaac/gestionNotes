

export const inscriptions = async (etudiant, classe, fn, montantPayer, dateInscription) => {
    try {
        if( !etudiant && !classe) throw new Error("objet doesn't exist");
        const montantRestant = fn(montantPayer);
        await etudiant.addClasse(classe, {
            through: {
                dateInscription: new Date(dateInscription),
                montantPayer: montantPayer,
                montantRestant: montantRestant,
                soldee: montantRestant === 0
            }
        });
    }catch(err) {
        throw new Error(err);
    }
}

export const calculeMontant = (montantPayer) => {
    try {
        if(montantPayer > 1200000 ){
            throw new Error("montantPayer est supperieur que la scolarité");
        }
        return  1200000 - montantPayer ;
    }catch(err) {
        throw new Error(err);
    }
}






