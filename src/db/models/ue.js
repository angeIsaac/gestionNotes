import { DataTypes, Model } from "sequelize";
import {sequelize} from "../connection.js";
import {Notes} from "./notes.js";

export class Ue extends Model {}

Ue.init({
    id :{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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


