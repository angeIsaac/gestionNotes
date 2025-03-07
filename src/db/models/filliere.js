import {DataTypes, Model as Filliers, Model} from "sequelize";
import {sequelize} from "../connection.js";
import {Classe} from "./classe.js";

export class Fillieres extends Model {}

Fillieres.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: "Filliere",
    tableName: "filliere",
    timestamps: true,
})



