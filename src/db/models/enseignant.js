import { DataTypes, Model } from "sequelize"
import {sequelize} from "../connection.js";
import { Classe } from "./classe.js";

export class Enseignant extends Model {}

Enseignant.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    specialite: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
},
    {
        sequelize,
        modelName: "Enseignant",
        tableName: "enseignant",
        timestamps: true,
    }
    )



