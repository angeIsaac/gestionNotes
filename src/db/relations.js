import {Etudiant} from "./models/etudiant.js";
import {Classe} from "./models/classe.js";
import {Bulletins} from "./models/bulletins.js";
import {Notes} from "./models/notes.js";
import {Ue} from "./models/ue.js";
import {Filiere} from "./models/filliere.js";
import {Enseignant} from "./models/enseignant.js";
import { ClasseEnseigne } from "./models/classeEnseigne.js";
import { Inscription } from "./models/inscription.js";
import { FilliereUe } from "./models/filliereUe.js";
import {EnseignantUe} from "./models/enseignatUe.js";
import {Versement} from "./models/versement.js";


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
    through: ClasseEnseigne,
    foreignKey: 'enseignantId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Classe.belongsToMany(Enseignant, {
    foreignKey: 'classeId',
    through: ClasseEnseigne,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

// relation plusieurs à plusieurs entres etudiant et classe


Ue.belongsToMany(Filiere, {
    through: FilliereUe,
    foreignKey: "ueId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Filiere.belongsToMany(Ue, {
    through: FilliereUe,
    foreignKey: "fillierId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

Enseignant.belongsToMany(Ue, {
    through: EnseignantUe,
    foreignKey: "enseignantId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Ue.belongsToMany(Enseignant, {
    through: EnseignantUe,
    foreignKey: "ueId",
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Etudiant.belongsToMany(Classe, {
    through: Inscription,
    foreignKey: 'etudiantId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
Classe.belongsToMany(Etudiant, {
    through: Inscription,
    foreignKey: "classId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
// Un Inscription a plusieurs versements
Inscription.hasMany(Versement, {
    foreignKey: 'inscriptionId',
    as: "versement",
    onDelete: 'CASCADE'
});
Versement.belongsTo(Inscription, {
    foreignKey: 'inscriptionId',
    as: "inscription",
});

Inscription.belongsTo(Etudiant, {
    foreignKey: 'etudiantId',
    as: 'etudiant'
});

Inscription.belongsTo(Classe, {
    foreignKey: 'classId',
    as: 'classe'
});

