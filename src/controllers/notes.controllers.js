import { Notes } from "../db/models/notes.js";

export const createNotes = async (req, res) => {
    try{
        let data = req.body;
        data = {
            ...data,
            "date": new Date(data.date)
        }
        const notes = await Notes.create(data);
        res.status(201).json(notes);
    }catch (err){
        return res.status(400).json({"error": err.message});
    }
}

export const updateNotes = async (req, res) => {
    try{
        if(! req.params.id) return res.status(400).json({"error":"Not Found"});

        return res.status(200).json(await Notes.update(req.body, {
            where: {id:  req.params.id},
            returning: true
        }));
    }catch(err){
        return res.status(500).json({"error": err.message});
    }
}

export const deleteNote = async (req, res) => {
    try{
        if(! req.params.id ) return res.status(400).json({"error":"Not Found"});

        return res.status(200).json(await Notes.destroy({where: {id: req.params.id}}));
    }catch(err){
        return res.status(500).json({"error": err.message});
    }
}

export const getNoteById = async (req, res) => {
    try {
        if(! req.params.id ) return res.status(400).json({"error":"Not Found"});
        return res.status(200).json(await Notes.findByPk(req.params.id));
    }catch (err){
        return res.status(500).json({"error": err.message});
    }
}

export const getAllNotes = async (req, res) => {
    try{
        res.status(200).json(await Notes.findAll());
    }catch (err) {
        return res.status(500).json({"error": err.message});
    }
}