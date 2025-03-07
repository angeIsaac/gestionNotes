import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {errorHandlers} from "./utils/herrorHandlers.js";
import {Etudiant} from "./db/models/etudiant.js";

export const creatApp = function (){
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: false }));


    app.use(errorHandlers)
    return app;
}


