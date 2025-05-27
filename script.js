const texts = [
  "Aku kangen kamu 😘",
  "Jangan lupa makan ya 🍜",
  "Aku sayang kamu tiap hari 💗",
  "Kamu adalah alasanku tersenyum 😊",
];
let index = 0,
  char = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (char < texts[index].length) {
    typingElement.textContent += texts[index].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (char > 0) {
    typingElement.textContent = texts[index].substring(0, char - 1);
    char--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);
