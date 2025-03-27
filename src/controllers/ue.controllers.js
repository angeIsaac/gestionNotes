import { Ue } from "../db/models/ue.js";

export const getAllUe = (req, res) => {
    try{

    }catch(err){
        res.status(500).send({error: err});
    }
}