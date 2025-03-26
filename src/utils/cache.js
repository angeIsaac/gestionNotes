import {client} from "./connection.js";

export const miseEncache = async (cle, time, valeur) => {
    await client.setEx(cle, time, JSON.stringify(valeur, null, 2));
}

export const valeurCache = async (cle) => {
    return await client.get(cle, (err, value) =>{
        if(err) console.error(err);
        else console.log(value)
    });
}

export const deleteCache = async (cle) => {
    await client.del(cle, (err, value) =>{
        if(err) console.error(err);
        else if(value) console.log("valeur supprimer")
        else console.log("la clé n'existe pas ")
    });
}