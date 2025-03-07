import { DataTypes, Model } from "sequelize";
import Validator from "validator";
import {sequelize} from "../connection.js";
import {Etudiant} from "./etudiant.js";
import {Classe} from "./classe.js";
import {Ue} from "./ue.js";


export class Notes extends Model {}

Notes.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    types: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isIn:{
                args: [["devoir", "examen"]],
                msg: "le mot entrer n'est pas autorisé"
            }
        }
    },
    notes: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            customValidator(value){
                if(value < 0 || value > 20){
                    throw new Error("la note doit est comprise entre 0 et 20")
                }
            }
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
            isDate: true
        }
    }
},
    {
        sequelize,
        modelName: "Notes",
        timestamps: true,
        tableName: "notes"
    }
)

Notes.belongsTo(Etudiant, {
    foreignKey: {
        allowNull: false,
        name: "noteId",
        type: DataTypes.INTEGER,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
Notes.belongsTo(Classe, {
    foreignKey: {
        name: "classeId",
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
Notes.belongsTo(Ue, {
    foreignKey: {
        name: "ueId",
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})