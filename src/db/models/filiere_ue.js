import {DataTypes, Deferrable, Model} from "sequelize";
import {Fillieres} from "./filliere.js";
import {Ue} from "./ue.js";
import {sequelize} from "../connection.js";


export class filiere_ue extends Model {}
filiere_ue.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
    },
    filiereId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Fillieres,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    ueId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Ue,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
}, {
    sequelize,
    modelName: "Filiere_ue",
    timestamps: true,
    tableName: "filiere_ue",
})

Fillieres.belongsToMany(Ue, { through: filiere_ue })
Ue.belongsToMany(Fillieres, { through: filiere_ue })