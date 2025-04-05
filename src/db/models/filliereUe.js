import { DataTypes, Model } from "sequelize";
import {sequelize} from "../connection.js";

export class FilliereUe extends Model {}

FilliereUe.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        fillierId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        ueId: {
            type: DataTypes.UUID,
            allowNull: false
        },
        niveau: {
            type: DataTypes.STRING,
            allowNull: false
        },
        semestre: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        obligatoire: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "FilliereUe",
        timestamps: false,
        tableName: "filliereUe"
    }
)