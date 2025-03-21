import {Etudiant} from "./models/etudiant.js";
import {DataTypes} from "sequelize";
import {Classe} from "./models/classe.js";
import {Bulletins} from "./models/bulletins.js";
import {Notes} from "./models/notes.js";
import {Ue} from "./models/ue.js";
import {Fillieres} from "./models/filliere.js";
import {Enseignant} from "./models/enseignant.js";



// relation entre etudiant et bulletins
Etudiant.hasMany(Bulletins)
Bulletins.belongsTo(Etudiant, {
    foreignKey: {
        name: "etudiantId",
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
})


// relation un à plusieurs entre classe et un bulletins
Classe.hasMany(Bulletins)
Bulletins.belongsTo(Classe, {
    foreignKey: {
        name: "classeId",
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
})

// relation un à plusieurs entre Ue et Notes
Ue.hasMany(Notes)
Notes.belongsTo(Ue, {
    foreignKey: {
        name: "ueId",
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

//relation  un à plusieur entre etudiant et notes
Etudiant.hasMany(Notes, {})
Notes.belongsTo(Etudiant, {
    foreignKey: {
        allowNull: false,
        name: "etudiantId",
        type: DataTypes.INTEGER,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

// relation  un à plusieur entre classe et la notes
Classe.hasMany(Notes)
Notes.belongsTo(Classe, {
    foreignKey: {
        name: "classeId",
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})


// relations  un à plusieur entre la fillieres et classes
Fillieres.hasMany(Classe)
Classe.belongsTo(Fillieres, {
    foreignKey: 'fillierId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})



// relation un à plusieurs entre enseignant et classe
Enseignant.hasMany(Classe)
Classe.belongsTo(Enseignant, {
    foreignKey: 'enseignantId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// relation plusieurs à plusieurs entres etudiant et classe
Enseignant.belongsToMany(Classe, {
    through: "inscription",
    foreignKey: 'etudiantId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Classe.belongsToMany(Enseignant, {
    through: "inscriptionId",
    foreignKey: "classId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
