import {DataTypes, Model} from "sequelize";
import {sequelize} from "../connection.js";

export class Inscription extends Model {}

Inscription.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        classId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        etudiantId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        dateInscription: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue:  Date.now(),
        },
        montantPayer: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue:  0
        },
        montantRestant: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize,
        tableName: 'inscription',
        timestamps: true,
        modelName: 'inscription',
    }
)