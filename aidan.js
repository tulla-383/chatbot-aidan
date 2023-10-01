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
  // Vous pouvez maintenant poser des questions spécifiques à l'utilisateur et collecter ses réponses.
  // Par exemple, commencez par demander son secteur d'activité.
  const secteurActivite = prompt("Quel est votre secteur d'activité ?");
  
  if (secteurActivite) {
    // Vous pouvez continuer à poser des questions en fonction de la réponse de l'utilisateur ici.
    if (secteurActivite === "restaurant") {
      const nomRestaurant = prompt("Quel est le nom de votre restaurant ?");
      const descriptionMenu = prompt("Pouvez-vous décrire votre menu ?");
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

// Appeler cette fonction pour afficher le message d'introduction au chargement de la page
gererPremierContact();
