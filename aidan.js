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

// Générer une réponse du chatbot
function generateResponse(input) {
    // Ajoutez ici la logique du chatbot
    const responses = [
      "Bonjour! Comment puis-je vous aider ?",
      "Je suis désolé, je n'ai pas compris votre question. Pourriez-vous la reformuler, s'il vous plaît ?",
      "Je suis là pour vous assister avec toutes vos questions ou préoccupations.",
      "Je suis désolé, je ne peux pas naviguer sur Internet ni accéder à des informations externes. Y a-t-il autre chose avec laquelle je peux vous aider ?",
      "Que souhaitez-vous savoir ?",
      "Je suis désolé, je ne suis pas programmé pour gérer un langage offensant ou inapproprié. Veuillez vous abstenir d'utiliser un tel langage dans notre conversation.",
      "Je suis là pour vous aider avec toutes vos questions ou problèmes. Comment puis-je vous assister aujourd'hui ?",
      "Y a-t-il quelque chose de spécifique dont vous aimeriez discuter ?",
      "Je suis heureux de vous aider avec toutes vos questions ou préoccupations. Dites-moi simplement comment je peux vous assister.",
      "Je suis là pour vous aider avec toutes vos questions ou problèmes. Comment puis-je vous assister aujourd'hui ?",
      "Y a-t-il quelque chose de spécifique que vous aimeriez demander ou discuter ? Je suis là pour vous aider avec toutes vos questions ou préoccupations.",
      "Je suis là pour vous aider avec toutes vos questions ou problèmes. Comment puis-je vous assister aujourd'hui ?",
    ];
    
    // Retourne une réponse aléatoire
    return responses[Math.floor(Math.random() * responses.length)];
}

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

// Appeler cette fonction lorsque l'utilisateur est prêt à commencer
gererPremierContact();
