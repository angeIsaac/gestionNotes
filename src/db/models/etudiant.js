 import {  DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";
 import {Ue} from "./ue.js";
 import {Notes} from "./notes.js";
 import {Bulletins} from "./bulletins.js";
 import {Inscription} from "./inscription.js";

 export class Etudiant extends Model {}

 Etudiant.init( {
         id: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
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
         DateNaissance: {
             type: DataTypes.DATE,
             allowNull: false,
         },
         matricule: {
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
        lieuHabitat: {
             type: DataTypes.TEXT,
             allowNull: false,
        },
        ville: {
             type: DataTypes.TEXT,
             allowNull: false,
        }
     },
     {
         sequelize,
         modelName: "Etudiant",
         freezeTableName: true,
         tableName: "etudiant",
         timestamps: true,
         logging: false,
     }
 )
 Etudiant.hasMany(Notes, {})
 Etudiant.hasMany(Bulletins)
 Etudiant.hasMany(Inscription)

