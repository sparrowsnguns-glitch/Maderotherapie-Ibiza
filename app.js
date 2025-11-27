// ====== Mehrsprachige Quiztexte ======
const TEXTS = {
  de: {
    startBtn: "Quiz starten",
    questions: [
      {q:"Was ist dir aktuell am wichtigsten?", a:["Wohler & leichter fühlen","Straffer & definierter werden","Weniger Wassereinlagerungen / Entstauung","Cellulite reduzieren"]},
      {q:"Welcher Bereich hat höchste Priorität?", a:["Bauch & Taille","Po","Beine","Arme","Rücken"]},
      {q:"Wie ist deine aktuelle Gewebestruktur?", a:["glatt","leichte Unebenheiten","sichtbare Cellulite","stärker ausgeprägte Unebenheiten"]},
      {q:"Wie fühlt sich dein Körper im Alltag an?", a:["leicht & entspannt","schwer / gestaut","geschwollen"]},
      {q:"Welches Tempo fühlt sich richtig an?", a:["sanfter Einstieg (1× pro Woche)","konstante Entwicklung (2× pro Woche)","intensiver Fokus (3× pro Woche)"]},
      {q:"Was motiviert dich am meisten?", a:["Reise / Sommer / Event","Wohlfühlen im eigenen Körper","Gesundheit & Vitalität","Selbstbewusstsein & Transformation"]}
    ],
    result: [
      {title:"Sanfter Ibiza‑Einstieg", lead:"Sanfte Entstauung & Wohlfühlen", plan:"6–8 Sitzungen, 1×/Woche"},
      {title:"Gezielte Konturierung", lead:"Definition & Hautbildverbesserung", plan:"8–12 Sitzungen, 2×/Woche"},
      {title:"Intensiv‑Transformation", lead:"Maximale Formung & Tiefeffekt", plan:"10–15 Sitzungen, 2–3×/Woche"}
    ]
  },
  en: {
    startBtn: "Start Quiz",
    questions: [
      {q:"What is your top priority?", a:["Feel lighter","Tone & define","Reduce water retention","Reduce cellulite"]},
      {q:"Which body area has highest priority?", a:["Belly & Waist","Buttocks","Legs","Arms","Back"]},
      {q:"How would you describe your tissue structure?", a:["smooth","slight irregularities","visible cellulite / water retention","stronger irregularities"]},
      {q:"How does your body feel during daily life?", a:["light & relaxed","heavy / congested","swollen"]},
      {q:"Which pace feels right?", a:["gentle start (1x/week)","steady development (2x/week)","intensive focus (3x/week)"]},
      {q:"What motivates you most?", a:["Trip / Summer / Event","Feel good in your body","Health & vitality","Confidence & transformation"]}
    ],
    result: [
      {title:"Gentle Ibiza Start", lead:"Relaxation & light feeling", plan:"6–8 sessions, 1x/week"},
      {title:"Targeted Contouring", lead:"Definition & visible skin improvement", plan:"8–12 sessions, 2x/week"},
      {title:"Intensive Transformation", lead:"Maximal shaping & deep effect", plan:"10–15 sessions, 2–3x/week"}
    ]
  },
  es: {
    startBtn: "Iniciar Quiz",
    questions: [
      {q:"¿Qué es más importante para ti actualmente?", a:["Sentirse más ligero","Tonificar & definir","Reducir retención de líquidos","Reducir celulitis"]},
      {q:"¿Qué área tiene mayor prioridad?", a:["Abdomen & cintura","Glúteos","Piernas","Brazos","Espalda"]},
      {q:"¿Cómo describirías tu estructura de tejido?", a:["suave","leve irregularidad","celulitis visible / retención de líquidos","irregularidades fuertes"]},
      {q:"¿Cómo se siente tu cuerpo en el día a día?", a:["ligero & relajado","pesado / congestionado","hinchado"]},
      {q:"¿Qué ritmo te parece adecuado?", a:["inicio suave (1x/semana)","desarrollo constante (2x/semana)","foco intensivo (3x/semana)"]},
      {q:"¿Qué te motiva más a comenzar?", a:["Viaje / verano / evento","Sentirse bien en el cuerpo","Salud & vitalidad","Confianza & transformación"]}
    ],
    result: [
      {title:"Inicio suave Ibiza", lead:"Relajación & bienestar", plan:"6–8 sesiones, 1x/semana"},
      {title:"Contorneado específico", lead:"Definición & mejora visible de la piel", plan:"8–12 sesiones, 2x/semana"},
      {title:"Transformación intensiva", lead:"Máxima forma & efecto profundo", plan:"10–15 sesiones, 2–3x/semana"}
    ]
  }
};

// ====== Globale Variablen ======
let currentLang = "de";
let currentQuestion = 0;
let totalPoints = 0;

// ====== DOM Elemente ======
const langSelect = document.getElementById("langSelect");
const startBtn = document.getElementById("startBtn");
const questionTitle = document.getElementById("question-title");
const answersDiv = document.getElementById("answers");
const quizContainer = document.getElementById("quiz-container");
const resultSection = document.getElementById("result-section");
const resultText = document.getElementById("result-text");
const sessionPlan = document.getElementById("session-plan");

// ====== Sprachwahl Event ======
langSelect.addEventListener("change", e => {
  currentLang = e.target.value;
  restartQuiz();
});

// ====== Quiz starten ======
startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  loadQuestion();
});

// ====== Funktionen ======
function restartQuiz() {
  currentQuestion = 0;
  totalPoints = 0;
  quizContainer.classList.add("hidden");
  resultSection.classList.add("hidden");
  startBtn.classList.remove("hidden");
  startBtn.textContent = TEXTS[currentLang].startBtn;
}

function loadQuestion() {
  const q = TEXTS[currentLang].questions[currentQuestion];
  questionTitle.textContent = q.q;
  answersDiv.innerHTML = "";

  q.a.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => selectAnswer(i + 1); // einfache Punkte-Verteilung
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(points) {
  totalPoints += points;
  currentQuestion++;
  if (currentQuestion < TEXTS[currentLang].questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultSection.classList.remove("hidden");

  let tier;
  if (totalPoints <= 12) tier = 0;
  else if (totalPoints <= 20) tier = 1;
  else tier = 2;

  const r = TEXTS[currentLang].result[tier];
  resultText.textContent = r.lead;
  sessionPlan.textContent = r.plan;
}
