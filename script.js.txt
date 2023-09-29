// script.js

const openChatButton = document.getElementById("open-chat");
const closeChatButton = document.getElementById("close-chat");
const chatWindow = document.getElementById("chat-window");

openChatButton.addEventListener("click", () => {
    chatWindow.style.display = "block";
});

closeChatButton.addEventListener("click", () => {
    chatWindow.style.display = "none";
});
