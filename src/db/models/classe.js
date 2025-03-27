import {DataTypes, Model } from 'sequelize'
import {sequelize} from "../connection.js";


export class Classe extends Model {}

Classe.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

},
    {
        sequelize,
        modelName: 'Classe',
        tableName: 'classes',
        timestamps: true,
    }
)

