import { DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";

export class ClasseEnseigne extends Model {}

ClasseEnseigne.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        enseignId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        classeId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        nbreClaseEnseigne: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "ClasseEnseigne",
        tableName: "ClasseEnseigne",
        timestamps: true,
    }
);
