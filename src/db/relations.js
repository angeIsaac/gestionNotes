import {Etudiant} from "./models/etudiant.js";
import {Classe} from "./models/classe.js";
import {Bulletins} from "./models/bulletins.js";
import {Notes} from "./models/notes.js";
import {Ue} from "./models/ue.js";
import {Fillieres} from "./models/filliere.js";
import {Enseignant} from "./models/enseignant.js";



// relation entre etudiant et bulletins
Etudiant.hasMany(Bulletins, {
    foreignKey: "etudiantId",
    as: "bulletins",
})
Bulletins.belongsTo(Etudiant, {
    foreignKey: "etudiantId",
    as: "etudiant",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
})


// relation un à plusieurs entre classe et un bulletins
Classe.hasMany(Bulletins, {
    foreignKey: "classeId",
    as: "bulletins",
})
Bulletins.belongsTo(Classe, {
    foreignKey: "classeId",
    as: "classes",
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
})

// relation un à plusieurs entre Ue et Notes
Ue.hasMany(Notes, {
    foreignKey: "ueId",
    as: 'notes',
})
Notes.belongsTo(Ue, {
    foreignKey: "ueId",
    as: "ue",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

//relation  un à plusieur entre etudiant et notes
Etudiant.hasMany(Notes, {
    foreignKey: "etudiantId",
    as:"notes"
})
Notes.belongsTo(Etudiant, {
    foreignKey: "etudiantId",
    as: "etudiant",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})

// relation  un à plusieur entre classe et la notes
Classe.hasMany(Notes, {
    foreignKey: "classeId",
    as: "notes",
})
Notes.belongsTo(Classe, {
    foreignKey: "classeId",
    as: "classes",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})


// relations  un à plusieur entre la fillieres et classes
Fillieres.hasMany(Classe, {
    foreignKey: 'fillierId',
    as: "filliers",
})
Classe.belongsTo(Fillieres, {
    foreignKey: 'fillierId',
    as: "filliers",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})



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

Ue.belongsToMany(Fillieres, {
    through: "filliere_ue",
    foreignKey: "ueId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Fillieres.belongsToMany(Ue, {
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
