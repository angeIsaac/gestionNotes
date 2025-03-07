import {DataTypes, Model } from 'sequelize'
import {sequelize} from "../connection.js";
import {Enseignant} from "./enseignant.js";
import {Fillieres} from "./filliere.js";
import {Notes} from "./notes.js";
import {Bulletins} from "./bulletins.js";

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

Classe.belongsTo(Enseignant, {
    foreignKey: 'enseignantId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Classe.belongsTo(Fillieres, {
    foreignKey: 'fillierId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Classe.hasMany(Notes)
Classe.hasMany(Bulletins)
