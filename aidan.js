// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');
const startButton = document.getElementById('start-button');

// Message d'introduction général
const introductionMessage = "Bienvenue sur notre site. Je suis Aidan, votre assistant virtuel. Mon objectif est de vous aider à trouver les solutions les mieux adaptées à votre métier. Prêt à commencer ?";

// Variable pour stocker le prénom et le nom de l'utilisateur
let prenomUtilisateur = "";
let nomUtilisateur = "";

// Afficher le message d'introduction sur la page
function afficherAccueil() {
  // Créer le message d'accueil
  const messageAccueil = "Bienvenue sur notre site. Je suis Aidan, votre assistant virtuel. Mon objectif est de vous aider à trouver les solutions les mieux adaptées à votre métier. Prêt à commencer ?";
  
  // Ajouter le message d'accueil à la conversation
  ajouterMessage("chatbot", messageAccueil);
}

// Fonction pour poser une question à l'utilisateur
function poserQuestion(question) {
  // Afficher la question dans la boîte de dialogue d'Aidan
  ajouterMessage("chatbot", question);

  // Ajouter un gestionnaire d'événements pour gérer la réponse de l'utilisateur
  inputForm.addEventListener('submit', soumettreQuestion);

  // Effacer le champ de saisie
  inputField.value = '';
}

// Fonction pour gérer les réponses aux questions
function soumettreQuestion(event) {
  event.preventDefault();
  const reponseUtilisateur = inputField.value;

  if (!prenomUtilisateur) {
    // Répondre à la première question
    prenomUtilisateur = reponseUtilisateur;
    ajouterMessage("chatbot", `Ravi de discuter avec toi, ${prenomUtilisateur}, quel est ton nom ?`);
  } else if (prenomUtilisateur && !nomUtilisateur) {
    // Répondre à la deuxième question
    nomUtilisateur = reponseUtilisateur;
    ajouterMessage("chatbot", `Merci ! Et maintenant, ${prenomUtilisateur}, tu exerces quelle activité ?`);
   } else if (prenomUtilisateur && nomUtilisateur) {
    // Répondre à la troisième question
    if (
      reponseUtilisateur === "restaurant" ||
      reponseUtilisateur === "bistrot" ||
      reponseUtilisateur === "brasserie" ||
      reponseUtilisateur === "auberge" ||
      reponseUtilisateur === "guinguette" ||
      reponseUtilisateur === "créperie" ||
      reponseUtilisateur === "bouchon" ||
      reponseUtilisateur === "taverne" ||
      reponseUtilisateur === "grill" ||
      reponseUtilisateur === "cantine" ||
      reponseUtilisateur === "boui-boui" ||
      reponseUtilisateur === "snack" ||
      reponseUtilisateur === "rôtisserie" ||
      reponseUtilisateur === "café" ||
      reponseUtilisateur === "trattoria" ||
      reponseUtilisateur === "pizzeria" ||
      reponseUtilisateur === "tiki bar" ||
      reponseUtilisateur === "resto" ||
      reponseUtilisateur === "cuisine locale" ||
      reponseUtilisateur === "bungalow gourmand" ||
      reponseUtilisateur === "échoppe" ||
      reponseUtilisateur === "barbecue" ||
      reponseUtilisateur === "cuisine de rue" ||
      reponseUtilisateur === "traiteur" ||
      reponseUtilisateur === "épicurienne" ||
      reponseUtilisateur === "taque" ||
      reponseUtilisateur === "table d'hôte" ||
      reponseUtilisateur === "lolo" ||
      reponseUtilisateur === "paillote" ||
      reponseUtilisateur === "food truck"
    ) {
      ajouterMessage("chatbot", `C'est intéressant, ${prenomUtilisateur} exerce l'activité de ${reponseUtilisateur}.`);
      ajouterMessage("chatbot", `Nous proposons plusieurs services pour les établissements ${reponseUtilisateur}. Comment puis-je vous aider ?`);
    // Vous pouvez maintenant traiter les réponses de l'utilisateur ou poursuivre la conversation selon votre logique.
  }

  // Effacer le champ de saisie
  inputField.value = '';
}

// Fonction pour ajouter un message à la conversation
function ajouterMessage(qui, message) {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
  const messageElement = document.createElement('div');
  messageElement.classList.add('chatbot-message', qui + '-message');
  messageElement.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${message}</p>`;
  conversation.appendChild(messageElement);
  messageElement.scrollIntoView({ behavior: "smooth" });
}

// Ajouter un gestionnaire d'événements au clic sur le bouton "OK" pour commencer
startButton.addEventListener('click', function() {
  // Supprimer le bouton "OK" de la vue
  startButton.style.display = 'none';

  // Appeler la fonction pour commencer la série de questions
  commencerQuestions();
});

// Fonction pour commencer la série de questions
function commencerQuestions() {
  // Vous pouvez poser la première question ici
  poserQuestion("Quel est votre prénom ?");
}

// Appeler cette fonction pour afficher le message d'accueil au chargement de la page
afficherAccueil();
