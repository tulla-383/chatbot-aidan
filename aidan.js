// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Message d'introduction du chatbot
const introductionMessage = "Bonjour! Je suis Aidan, votre conseiller commercial virtuel. Je vais vous poser quelques questions pour mieux comprendre vos besoins.";

// Ajouter un gestionnaire d'événements au chargement de la page
window.addEventListener('load', () => {
    afficherMessageChatbot(introductionMessage);
});

// Ajouter un gestionnaire d'événements au formulaire
inputForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = inputField.value;
    inputField.value = '';

    // Gérer la réponse de l'utilisateur ici
    traiterReponseUtilisateur(userInput);
});

// Fonction pour afficher un message du chatbot dans la conversation
function afficherMessageChatbot(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', 'chatbot');
    messageElement.innerHTML = `<p class="chatbot-text">${message}</p>`;
    conversation.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: "smooth" });
}

// Fonction pour gérer la réponse de l'utilisateur
function traiterReponseUtilisateur(reponse) {
    // TODO: Implémentez la logique de traitement des réponses de l'utilisateur ici
    // Vous pouvez poser des questions supplémentaires et présenter des services en fonction des réponses.
}
