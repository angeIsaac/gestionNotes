import { DataTypes, Model } from 'sequelize'
import {sequelize} from "../connection.js";
import {Etudiant} from "./etudiant.js";
import {Classe} from "./classe.js";

export class Inscription extends Model {}

Inscription.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
    },
    anneeScolaire: {
        type: DataTypes.STRING(9),
        allowNull: false,
    }
},
    {
        sequelize,
        modelName: "Inscription",
        tableName: "inscription",
        timestamps: true,

    }
)

Inscription.belongsTo(Etudiant, {
    foreignKey: {
        name: "EtudiantId",
        allowNull: false,
        dataTypes: DataTypes.INTEGER,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})

Inscription.belongsTo(Classe, {
    foreignKey: {
        name: "ClasseId",
        allowNull: false,
        dataTypes: DataTypes.INTEGER,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
})