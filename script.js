const today = new Date();
document.getElementById("date").innerText =
  "📅 Today: " + today.toDateString();

const facts = [
  "🍯 Honey never spoils.",
  "🐙 Octopuses have three hearts.",
  "🍌 Bananas are berries, but strawberries are not.",
  "🪐 A day on Venus is longer than a year on Venus.",
  "🦈 Sharks existed before trees."
];

const colors = [
  "#f0f8ff",
  "#fff3e0",
  "#e8f5e9",
  "#fce4ec",
  "#ede7f6"
];

function newFact() {
  const factText = document.getElementById("fact");
  factText.classList.remove("show");

  setTimeout(() => {
    factText.innerText =
      facts[Math.floor(Math.random() * facts.length)];
    document.body.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    factText.classList.add("show");
  }, 100);
}
