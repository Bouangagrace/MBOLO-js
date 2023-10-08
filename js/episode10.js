// Déclaration des variables
let montant;
let remise;
let montantRemise;

// Demande du montant à l'utilisateur
montant = prompt("Quel est le montant de la facture ?");

// Calcul de la remise
if (montant >= 40000) {
  remise = montant * 0.1;
} else {
  remise = 0;
}

// Calcul du montant à payer
montantRemise = montant - remise;

// Affichage du montant à payer
alert("Le montant à payer est de " + montantRemise + " F.");
