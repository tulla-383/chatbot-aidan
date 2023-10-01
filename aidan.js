// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');
const startButton = document.getElementById('start-button');

// Message d'introduction général
const introductionMessage = "Bienvenue sur notre site. Je suis Aidan, votre assistant virtuel. Mon objectif est de vous aider à trouver les solutions les mieux adaptées à votre métier. Pour ce faire, je vais vous poser quelques questions afin de mieux comprendre vos besoins. Prêt à commencer ?";

// Afficher le message d'introduction sur la page
function afficherIntroduction() {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
  const message = document.createElement('div');
  message.classList.add('chatbot-message', 'chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${introductionMessage}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({ behavior: "smooth" });
}

// Fonction pour poser une question à l'utilisateur
function poserQuestion(question) {
  // Afficher la question dans la boîte de dialogue d'Aidan
  ajouterMessage("chatbot", question);

  // Ajouter un gestionnaire d'événements pour gérer la réponse de l'utilisateur
  inputForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const reponseUtilisateur = inputField.value;

    // Afficher la réponse de l'utilisateur dans la boîte de dialogue
    ajouterMessage("user", reponseUtilisateur);

    // Vous pouvez maintenant traiter la réponse de l'utilisateur
    // et poser la question suivante en fonction de sa réponse.

    // Exemple : poser la question suivante
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
  reponseUtilisateur === "cabane à sucre" ||
  reponseUtilisateur === "paillote" ||
  reponseUtilisateur === "camion gourmand"
) {
  poserQuestion("Quel est le nom de votre établissement ?");
}
    } else if (reponseUtilisateur === "airbnb") {
      // Poser des questions spécifiques aux propriétaires Airbnb...
    } else if (reponseUtilisateur === "location de voitures") {
      // Poser des questions spécifiques aux loueurs de voitures...
    } else if (reponseUtilisateur === "supermarché") {
      // Poser des questions spécifiques aux supermarchés...
    } else {
      // Si le secteur d'activité n'est pas reconnu, vous pouvez gérer cela ici.
      ajouterMessage("chatbot", "Désolé, nous ne prenons pas encore en charge ce secteur d'activité, mais nous prendrons en compte votre demande !");
      // Poser une question différente ou terminer la conversation, selon votre logique.
    }

    // Effacer le champ de saisie
    inputField.value = '';
  });
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

// Ajouter un gestionnaire d'événements au clic sur le bouton "Commencer"
startButton.addEventListener('click', function() {
  // Supprimer le bouton "Commencer" de la vue
  startButton.style.display = 'none';

  // Appeler la fonction pour commencer la série de questions
  commencerQuestions();
});

// Fonction pour commencer la série de questions
function commencerQuestions() {
  // Vous pouvez poser la première question ici
  poserQuestion("Quel est votre secteur d'activité ?");
}

// Appeler cette fonction pour afficher le message d'introduction au chargement de la page
afficherIntroduction();
