import {DataTypes, Model } from 'sequelize'
import {sequelize} from "../connection.js";


export class Classe extends Model {}

Classe.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    }

},
    {
        sequelize,
        modelName: 'Classe',
        tableName: 'classes',
        timestamps: true,
    }
)

