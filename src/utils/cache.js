import {client} from "./connection.js";

export const miseEncache = async (cle, valeur) => {
    await client.set(cle, valeur);
}

export const valeurCache = async (cle) => {
    return await client.get(cle);
}