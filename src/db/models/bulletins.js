import {DataTypes, Model} from "sequelize";
import {sequelize} from "../connection.js";



export class Bulletins extends Model {}

Bulletins.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        primaryKey: true,
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

