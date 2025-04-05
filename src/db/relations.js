import {Etudiant} from "./models/etudiant.js";
import {Classe} from "./models/classe.js";
import {Bulletins} from "./models/bulletins.js";
import {Notes} from "./models/notes.js";
import {Ue} from "./models/ue.js";
import {Filiere} from "./models/filliere.js";
import {Enseignant} from "./models/enseignant.js";
import {DataTypes} from "sequelize";



// relation entre etudiant et bulletins
Etudiant.hasMany(Bulletins, {
    foreignKey: "etudiantId",
    as: "bulletins",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
})
Bulletins.belongsTo(Etudiant, {
    foreignKey: "etudiantId",
    as: "etudiant",
})


// relation un à plusieurs entre classe et un bulletins
Classe.hasMany(Bulletins, {
    foreignKey: "classeId",
    as: "bulletins",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
})
Bulletins.belongsTo(Classe, {
    foreignKey: "classeId",
    as: "classes",
})

// relation un à plusieurs entre Ue et Notes
Ue.hasMany(Notes, {
    foreignKey: "ueId",
    as: 'notes',
    onDelete: "CASCADE",
    onUpdate: "RESTRICT",
})
Notes.belongsTo(Ue, {
    foreignKey: "ueId",
    as: "ue",
})

//relation  un à plusieur entre etudiant et notes
Etudiant.hasMany(Notes, {
    foreignKey: "etudiantId",
    as:"notes",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
Notes.belongsTo(Etudiant, {
    foreignKey: "etudiantId",
    as: "etudiant",
})

// relation  un à plusieur entre classe et la notes
Classe.hasMany(Notes, {
    foreignKey: "classeId",
    as: "notes",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
Notes.belongsTo(Classe, {
    foreignKey: "classeId",
    as: "classe",
})


// relations  un à plusieur entre la fillieres et classes
Filiere.hasMany(Classe, {
    foreignKey: "filiereId",
    as: "classe", // Un nom logique pour les classes d'une filière
    onDelete: "CASCADE", // Supprime les classes quand la filière est supprimée
    onUpdate: "CASCADE",
});

Classe.belongsTo(Filiere, {
    foreignKey: "filiereId",
    as: "filiere", // Un nom logique pour la relation inverse
});



// relation un à plusieurs entre enseignant et une classe
Enseignant.belongsToMany(Classe, {
    through: "ClasseEnseigné",
    foreignKey: 'enseignId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Classe.belongsToMany(Enseignant, {
    foreignKey: 'classeId',
    through: "ClasseEnseigné",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// relation plusieurs à plusieurs entres etudiant et classe
Etudiant.belongsToMany(Classe, {
    through: "inscriptions",
    foreignKey: 'etudiantId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Classe.belongsToMany(Etudiant, {
    through: "inscriptions",
    foreignKey: "classId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

Ue.belongsToMany(Filiere, {
    through: "filliere_ue",
    foreignKey: "ueId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Filiere.belongsToMany(Ue, {
    through: "filliere_ue",
    foreignKey: "fillierId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

Enseignant.belongsToMany(Ue, {
    through: "enseignant_Ue",
    foreignKey: "enseignantId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Ue.belongsToMany(Enseignant, {
    through: "enseignant_Ue",
    foreignKey: "enseignantId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
