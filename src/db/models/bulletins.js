import {DataTypes, Model} from "sequelize";
import {sequelize} from "../connection.js";
import {Etudiant} from "./etudiant.js";
import {Classe} from "./classe.js";


export class Bulletins extends Model {}

Bulletins.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
    },
    anneeScolaire: {
        type: DataTypes.STRING(9),
        allowNull: false,
    },
    moyenne: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
        validate: {
            customValidator(value){
                if(value < 0 || value > 20){
                    throw new Error("la moyenne doit etre comprise entre 0 et 20");
                }
            }
        }
    },
    rang: {
        type: DataTypes.INTEGER(),
        allowNull: false,
    }
},
    {
        sequelize,
        modelName: "Bulletins",
        timestamps: true,
        tableName: "bulletins",
    }
)

Bulletins.belongsTo(Etudiant, {
    foreignKey: {
        name: "etudiantId",
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
})
Bulletins.belongsTo(Classe, {
    foreignKey: {
        name: "classeId",
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
})
