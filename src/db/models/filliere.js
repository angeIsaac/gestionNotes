import {DataTypes, Model as Filliers, Model} from "sequelize";
import {sequelize} from "../connection.js";
import {Classe} from "./classe.js";

export class Filiere extends Model {}

Filiere.init({
    id: {
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



