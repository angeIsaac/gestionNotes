import fs from "fs";
import path from 'path';


export const convertToB64 = (filePath) => {
    // read image file
    console.log('convertToB64 file: ', filePath)
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            // error handle
            console.log('convert toB64: ', err);
            console.log("la donnée", data);
            if(err)  reject(err)
            // get image file extension name
            const extensionName = path.extname(filePath).slice(1);
            console.log("l'extension du fichier ", extensionName)
            // convert image file to base64-encoded string
            const base64Data = data.toString('base64');
            // combine all strings
            const base64DataStr = `data:image/${extensionName};base64,${base64Data}`;
            resolve(base64DataStr)
        })
    })
};

export const deleteFile = async (filePath) => {
    try {
        await fs.unlinkSync(filePath);
        console.log(`Fichier supprimé avec succès : ${filePath}`);
    } catch (err) {
        console.error(`Erreur lors de la suppression du fichier : ${err.message}`);
        throw new Error("Erreur lors de la suppression: " + err.message);
    }
};
