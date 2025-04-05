import { DataTypes, Model } from "sequelize";
import {sequelize} from "../connection.js";

export class EnseignantUe extends Model {}

EnseignantUe.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        enseignantId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        ueId: {
            type: DataTypes.UUID,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "EnseignantUe",
        tableName: "EnseignantUe",
        timestamps: true,
    }
)