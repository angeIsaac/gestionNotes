import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {errorHandlers} from "./utils/herrorHandlers.js";
import usersRoutes from "./routes/users.router.js";
import EtudiantsRoutes from "./routes/etudiant.route.js"
import EnseignantRoute from "./routes/enseignant.route.js";
import fillierRoutes from "./routes/filliere.route.js";
import classeRoutes from "./routes/classe.route.js";

export const creatApp = function (){
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static("public"));
    app.use(cors());
    app.use(cookieParser());

    app.use("/api/users", usersRoutes);
    app.use("/api/etudiant", EtudiantsRoutes);
    app.use("/api/enseignant", EnseignantRoute);
    app.use("/api/fillieres", fillierRoutes);
    app.use("/api/classes", classeRoutes);

    app.use(errorHandlers)
    return app;
}


