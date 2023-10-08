// Déclaration des variables
let nom;
let sexe;

// Demande du nom à l'utilisateur
nom = prompt("Quel est votre nom ?");

// Demande du sexe à l'utilisateur
sexe = prompt("Quel est votre sexe ? (homme/femme)");

// Vérification du sexe
if (sexe == "homme") {
  // L'utilisateur est un homme
  alert("Bonjour monsieur " + nom);
} else if (sexe == "femme") {
  // L'utilisateur est une femme
  alert("Bonjour madame " + nom);
} else {
  // Le sexe de l'utilisateur n'est pas défini
  alert("Le sexe de l'utilisateur n'est pas défini");
}
