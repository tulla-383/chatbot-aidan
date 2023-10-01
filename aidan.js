// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');
const startButton = document.getElementById('start-button');

// Message d'introduction du chatbot
const introductionMessage = "Bonjour! Je suis Aidan, votre conseiller commercial virtuel. Je vais vous poser quelques questions pour mieux comprendre vos besoins.";

// Ajouter un gestionnaire d'événements au chargement de la page
window.addEventListener('load', () => {
    afficherMessageChatbot(introductionMessage);
});

// Ajouter un gestionnaire d'événements au clic sur le bouton "OK" pour commencer
startButton.addEventListener('click', () => {
    // Supprimer le bouton "OK" de la vue
    startButton.style.display = 'none';

    // Commencer la série de questions
    commencerQuestions();
});

// Fonction pour afficher un message du chatbot dans la conversation
function afficherMessageChatbot(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', 'chatbot');
    messageElement.innerHTML = `<p class="chatbot-text">${message}</p>`;
    conversation.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: "smooth" });
}

// Fonction pour commencer la série de questions
function commencerQuestions() {
    // Vous pouvez poser la première question ici
    poserQuestion("Quel est votre prénom ?");
}

// Reste du code pour traiter les réponses de l'utilisateur et présenter les services
