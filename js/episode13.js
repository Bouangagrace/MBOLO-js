// Déclaration des variables
let bonneReponse;
let reponseUtilisateur;

// Initialisation des variables
bonneReponse = 5 + 1;
reponseUtilisateur = null;

// Boucle de validation
while (bonneReponse != reponseUtilisateur) {
  // Affichage de l'opération
  console.log("Combien font 5+1 ?");

  // Réception de la réponse de l'utilisateur
  reponseUtilisateur = prompt("Votre réponse : ");

  // Vérification de la réponse de l'utilisateur
  if (bonneReponse != reponseUtilisateur) {
    console.log("La réponse est incorrecte.");
  }
}

// Affichage de la bonne réponse
console.log("La bonne réponse est " + bonneReponse);
