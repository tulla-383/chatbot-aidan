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
  // Poser la première question à l'utilisateur
  const secteurActivite = prompt("Quel est votre secteur d'activité ?");

  if (secteurActivite) {
    // Ajouter la question et la réponse à la conversation
    ajouterMessage("user", secteurActivite);

    // Vous pouvez maintenant continuer à poser des questions en fonction de la réponse de l'utilisateur ici.
    if (secteurActivite === "restaurant") {
      const nomRestaurant = prompt("Quel est le nom de votre restaurant ?");
      ajouterMessage("user", nomRestaurant);
      const descriptionMenu = prompt("Pouvez-vous décrire votre menu ?");
      ajouterMessage("user", descriptionMenu);
      // Continuez avec d'autres questions pour les restaurants...
    } else if (secteurActivite === "airbnb") {
      // Posez des questions spécifiques aux propriétaires Airbnb...
    } else if (secteurActivite === "location de voitures") {
      // Posez des questions spécifiques aux loueurs de voitures...
    } else if (secteurActivite === "supermarché") {
      // Posez des questions spécifiques aux supermarchés...
    } else {
      // Si le secteur d'activité n'est pas reconnu, vous pouvez gérer cela ici.
      alert("Désolé, nous ne prenons pas encore en charge ce secteur d'activité, mais nous prendrons en compte votre demande !");
    }
  }
}

// Fonction pour ajouter un message à la conversation
function ajouterMessage(sender, message) {
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
  let messageElement = document.createElement('div');
  messageElement.classList.add('chatbot-message', sender + '-message');
  messageElement.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${message}</p>`;
  conversation.appendChild(messageElement);
  messageElement.scrollIntoView({ behavior: "smooth" });
}

  }
}

// Appeler cette fonction pour afficher le message d'introduction au chargement de la page
gererPremierContact();
