const quizData = [
  {
    question: "Was ist dir aktuell am wichtigsten?",
    answers: [
      { text: "Wohler & leichter fühlen", points: 2 },
      { text: "Straffer & definierter werden", points: 4 },
      { text: "Weniger Wassereinlagerungen / Entstauung", points: 3 },
      { text: "Cellulite reduzieren", points: 5 }
    ]
  },
  {
    question: "Welcher Bereich hat höchste Priorität?",
    answers: [
      { text: "Bauch & Taille", points: 4 },
      { text: "Po", points: 3 },
      { text: "Beine", points: 5 },
      { text: "Arme", points: 2 },
      { text: "Rücken", points: 1 }
    ]
  },
  {
    question: "Wie ist deine aktuelle Gewebestruktur?",
    answers: [
      { text: "glatt", points: 1 },
      { text: "leichte Unebenheiten", points: 3 },
      { text: "sichtbare Cellulite", points: 4 },
      { text: "stärker ausgeprägte Unebenheiten", points: 5 }
    ]
  },
  {
    question: "Wie fühlt sich dein Körper im Alltag an?",
    answers: [
      { text: "leicht & entspannt", points: 1 },
      { text: "schwer / gestaut", points: 3 },
      { text: "geschwollen", points: 4 }
    ]
  },
  {
    question: "Welches Tempo fühlt sich richtig an?",
    answers: [
      { text: "sanfter Einstieg (1× pro Woche)", points: 1 },
      { text: "konstante Entwicklung (2× pro Woche)", points: 3 },
      { text: "intensiver Fokus (3× pro Woche)", points: 5 }
    ]
  },
  {
    question: "Was motiviert dich am meisten?",
    answers: [
      { text: "Reise / Sommer / Event", points: 3 },
      { text: "Wohlfühlen im eigenen Körper", points: 2 },
      { text: "Gesundheit & Vitalität", points: 4 },
      { text: "Selbstbewusstsein & Transformation", points: 5 }
    ]
  }
];

let currentQuestion = 0;
let totalPoints = 0;

const questionTitle = document.getElementById("question-title");
const answersDiv = document.getElementById("answers");
const resultSection = document.getElementById("result-section");
const quizContainer = document.getElementById("quiz-container");

function loadQuestion() {
  let q = quizData[currentQuestion];
  questionTitle.textContent = q.question;

  answersDiv.innerHTML = "";
  q.answers.forEach(a => {
    let btn = document.createElement("button");
    btn.textContent = a.text;
    btn.onclick = () => selectAnswer(a.points);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(points) {
  totalPoints += points;
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultSection.classList.remove("hidden");

  let resultText = "";
  let sessionText = "";

  if (totalPoints <= 12) {
    resultText = "Du brauchst einen sanften Start zur Entspannung und Entstauung.";
    sessionText = "Empfohlen: 4–6 Maderotherapie-Sessions.";
  } else if (totalPoints <= 20) {
    resultText = "Dein Fokus liegt auf Tonisierung, Reduktion leichter Cellulite und Formung.";
    sessionText = "Empfohlen: 6–10 Sessions.";
  } else if (totalPoints <= 28) {
    resultText = "Du möchtest klare Veränderungen: Gewebeverbesserung & Detox.";
    sessionText = "Empfohlen: 10–14 Sessions.";
  } else {
    resultText = "Starke Zielsetzung: Transformation, Formung & Lymphaktivierung.";
    sessionText = "Empfohlen: 14–20 Sessions.";
  }

  document.getElementById("result-text").textContent = resultText;
  document.getElementById("session-plan").textContent = sessionText;
}

// Start
loadQuestion();
