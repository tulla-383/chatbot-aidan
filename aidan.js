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
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

    // Afficher la question dans la boîte de dialogue d'Aidan
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', 'chatbot');
    messageElement.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${message}</p>`;
    conversation.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: "smooth" });
}

// Fonction pour commencer la série de questions
function commencerQuestions() {
    // Vous pouvez poser la première question ici
    poserQuestion("Quel est votre prénom ?");
}

// Fonction pour poser une question à l'utilisateur
function poserQuestion(question) {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

    // Afficher la question dans la boîte de dialogue d'Aidan
    const message = document.createElement('div');
    message.classList.add('chatbot-message', 'chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${question}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({ behavior: "smooth" });

    // Ajouter un gestionnaire d'événements pour gérer la réponse de l'utilisateur
    inputForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const reponseUtilisateur = inputField.value;

        // Afficher la réponse de l'utilisateur dans la boîte de dialogue
        afficherMessageUtilisateur(reponseUtilisateur);

        // Vous pouvez maintenant traiter la réponse de l'utilisateur
        // en fonction de la question posée.
        if (question === "Quel est votre prénom ?") {
            afficherMessageChatbot(`Ravi de discuter avec vous, ${reponseUtilisateur} !`);
            poserQuestion("Quel est votre nom ?");
        } else if (question === "Quel est votre nom ?") {
            afficherMessageChatbot(`Merci, ${reponseUtilisateur} !`);
            poserQuestion(`${reponseUtilisateur}, dans quel secteur exercez-vous votre activité ?\n1) Restaurant, food truck, pizzeria, snack, bistrot, brasserie\n2) Propriétaire de locations saisonnières, Airbnb, location saisonnière\n3) Loueur de voitures, location de voiture\n4) Supermarchés, épiceries`);
        } else if (question.endsWith("dans quel secteur exercez-vous votre activité ?")) {
            // Logique pour présenter les services en fonction de la réponse du secteur
            switch (reponseUtilisateur) {
                case "1":
                    afficherMessageChatbot(`Pour les restaurants, food trucks, pizzerias, snacks, bistrots et brasseries, nous proposons la création d'un chatbot pour répondre aux demandes de vos clients. Il peut gérer les horaires d'ouverture, le plat du jour, le menu, les réservations et les remarques directes au propriétaire.`);
                    break;
                case "2":
                    afficherMessageChatbot(`Pour les propriétaires de locations saisonnières, Airbnb et locations saisonnières, nous proposons la création d'un chatbot pour répondre aux questions des touristes. Il peut fournir des informations sur la géolocalisation, le code du portail, le fonctionnement des équipements et les contacts en cas de besoin.`);
                    break;
                case "3":
                    afficherMessageChatbot(`Pour les loueurs de voitures et la location de voiture, nous proposons la création d'un chatbot pour répondre aux questions des clients. Il peut fournir des informations sur la géolocalisation, les horaires, les procédures de retour et les conditions de location.`);
                    break;
                case "4":
                    afficherMessageChatbot(`Pour les supermarchés et épiceries, nous proposons un chatbot pour répondre aux questions sur les horaires, la géolocalisation, les promotions du jour, le catalogue de produits et des recettes locales.`);
                    break;
                default:
                    afficherMessageChatbot(`Pour l'instant, nous n'intervenons pas sur ce secteur, mais nous recevons plusieurs demandes et allons l'envisager.`);
                    // Vous pouvez ajouter ici la logique pour collecter les coordonnées de l'utilisateur si nécessaire.
                    break;
            }

            // Effacer le champ de saisie
            inputField.value = '';
        }
    });
}

// Fonction pour afficher un message de l'utilisateur dans la conversation
function afficherMessageUtilisateur(message) {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

    // Afficher la réponse de l'utilisateur dans la boîte de dialogue d'Aidan
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', 'user-message');
    messageElement.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${message}</p>`;
    conversation.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: "smooth" });
}
