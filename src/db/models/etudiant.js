 import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";

 export class Etudiant extends Model {}

 Etudiant.init( {
         id: {
             type: DataTypes.INTEGER,
             primaryKey: true,
             autoIncrement: true,
             allowNull: false,
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
         role: {
             type: DataTypes.STRING,
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
