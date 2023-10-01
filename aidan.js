// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');
const startButton = document.getElementById('start-button');

let userName = ""; // Pour stocker le prénom de l'utilisateur

// Message d'introduction général
const introductionMessage = "Bienvenue sur notre site. Je suis Aidan, votre assistant virtuel. Mon objectif est de vous aider à trouver les solutions les mieux adaptées à votre métier.";

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

    if (!userName) {
      // Si nous n'avons pas encore obtenu le prénom de l'utilisateur
      userName = reponseUtilisateur;
      poserQuestion(`Ravi de discuter avec toi, ${userName} ! On se tutoie !`);
    } else if (!userName && reponseUtilisateur) {
      // Si nous avons obtenu le prénom de l'utilisateur et nous attendons son nom
      poserQuestion(`${userName}, quel est ton nom ?`);
    } else {
      // Si nous avons le nom de l'utilisateur, nous pouvons poser la question suivante
      poserQuestion(`Merci, ${userName} ! Dans quel secteur exerces-tu ton activité ?`);
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
  poserQuestion("Quel est ton prénom ?");
}

// Appeler cette fonction pour afficher le message d'introduction au chargement de la page
afficherIntroduction();
