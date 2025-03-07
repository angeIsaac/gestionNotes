import {DataTypes, Model as classe, Model as Class, Model} from 'sequelize'
import {sequelize} from "../connection.js";
import {Enseignant} from "./enseignant.js";
import {Fillieres} from "./filliere.js";

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

classe.belongsTo(Enseignant, {})
classe.belongsTo(Fillieres, {})
