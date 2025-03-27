import fs from "fs/promises";
import path from 'path';


export const convertToB64 = (filePath) => {
    // read image file
    console.log('convertToB64 file: ', filePath)
    return new Promise((resolve, rejected) => {
        fs.readFile(filePath, (err, data) => {
            // error handle
            if(err) {  rejected(err) }
            // get image file extension name
            const extensionName = path.extname(filePath);
            // convert image file to base64-encoded string
            const base64Data = Buffer.from(data, 'binary').toString('base64');
            // combine all strings
            const base64DataStr = `data:image/${extensionName.split('.').pop()};base64,${base64Data}`;
            resolve(base64DataStr)
        })
    })
};

export const deleteFile = async (filePath) => {
    try {
        await fs.unlink(filePath);
        console.log(`Fichier supprimé avec succès : ${filePath}`);
    } catch (err) {
        console.error(`Erreur lors de la suppression du fichier : ${err.message}`);
        throw new Error("Erreur lors de la suppression: " + err.message);
    }
};
