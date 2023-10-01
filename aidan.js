// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

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

// Vérifier si l'utilisateur entre en contact pour la première fois
let premierContact = true;

// Gérer l'envoi du message d'introduction au premier contact
function gererPremierContact() {
  if (premierContact) {
    afficherIntroduction();
    premierContact = false;
  }
}

// Récupérer le bouton "Commencer" par son identifiant
const startButton = document.getElementById('start-button');

// Ajouter un gestionnaire d'événements au clic sur le bouton
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
    if (reponseUtilisateur === "restaurant") {
      poserQuestion("Quel est le nom de votre restaurant ?");
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
  }
}

// Appeler cette fonction pour afficher le message d'introduction au chargement de la page
gererPremierContact();
