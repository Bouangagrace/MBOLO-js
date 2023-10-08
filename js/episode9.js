// Déclaration des variables
let moyenne;

// Demande de la moyenne à l'utilisateur
moyenne = prompt("Quelle est la moyenne de l'élève ?");

// Vérification de la moyenne
if (moyenne < 10) {
  // La moyenne est insuffisante
  alert("Mention : Insuffisant");
} else if (moyenne < 12) {
  // La moyenne est passable
  alert("Mention : Passable");
} else if (moyenne < 14) {
  // La moyenne est assez bien
  alert("Mention : Assez-bien");
} else if (moyenne < 16) {
  // La moyenne est bien
  alert("Mention : Bien");
} else {
  // La moyenne est excellent
  alert("Mention : Excellent");
}
