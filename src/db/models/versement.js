import { DataTypes, Model } from "sequelize";
import { sequelize } from "../connection.js";

export class Versement extends Model {}

Versement.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    montant: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateVersement: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize,
    modelName: "Versement",
    tableName: "versements",
    timestamps: true,
});


