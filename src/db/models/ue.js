import { DataTypes, Model } from "sequelize";
import {sequelize} from "../connection.js";
import {Notes} from "./notes.js";

export class Ue extends Model {}

Ue.init({
    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coefficient : {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
},
    {
        sequelize,
        modelName: "Ue",
        tableName: "ue",
        timestamps: true,
    }
)

Ue.hasMany(Notes)
