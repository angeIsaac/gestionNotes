import { DataTypes, Model } from "sequelize";
import {sequelize} from "../connection.js";

export class Users extends Model {}
Users.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            escape: true,
            isEmail: true,
            notEmpty: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            escape: true,
            isAlphanumeric: true,
            customValidator(value) {
                if(value.length < 8 ) {
                    throw new Error("le mot de passes doit contenir au moins 8 caracteres");
                }
            }
        }
    },
    roles: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isIn: {
                args: [["Admin", "etudiant", "enseignant"]],
                msg: "ce role n'est pas autoriser"
            }
        }
    }
},
    {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: true,
        logging: false
    }
)