const LANG = {
  en: {
    start:"Start Quiz",
    restart:"Restart Quiz",
    infoText:"Discover your personalized Maderotherapy plan for relaxation, contouring, and lymphatic wellness during your Ibiza vacation.",
    questions:[
      {q:"What matters most to you regarding your body?",a:["Feel lighter & well","Firm & defined","Reduce water retention","Reduce cellulite/unevenness"]},
      {q:"Which area is your current priority?",a:["Abdomen & waist","Buttocks","Legs","Arms","Back"]},
      {q:"How would you describe your current tissue structure?",a:["Smooth","Slight unevenness","Visible cellulite / water retention","More pronounced unevenness"]},
      {q:"How does your body feel in daily life?",a:["Light & relaxed","Heavy / congested","Swollen"]},
      {q:"Which pace feels right for you?",a:["Gentle start (1×/week)","Consistent development (2×/week)","Intensive focus (3×/week)"]},
      {q:"What motivates you most to start now?",a:["Travel / Summer / Event","Well-being in own body","Health & vitality","Confidence & transformation"]}
    ],
    results:[
      {title:"Gentle Ibiza Start",lead:"Gentle lymphatic & wellbeing — ideal to start your body routine.",plan:"6–8 sessions, 1×/week • Focus: Lymph drainage, light body contouring, sea aroma oils"},
      {title:"Targeted Contouring",lead:"Goal: Definition & visible skin improvement — perfect for Ibiza beach events.",plan:"8–12 sessions, 2×/week • Focus: Cellulite reduction, skin firming, local intensive treatment"},
      {title:"Intensive Transformation",lead:"Maximum shaping & deep effect — visible changes in short time.",plan:"10–15 sessions, 2–3×/week • Focus: deeper massage intensity, combined lymph & contour technique"}
    ]
  },
  de:{
    start:"Quiz starten",
    restart:"Quiz neu starten",
    infoText:"Entdecke dein persönliches Maderotherapie-Programm für Entspannung, Konturierung und Lymph-Wellness während deines Ibiza-Urlaubs.",
    questions:[
      {q:"Was ist dir aktuell am wichtigsten für deinen Körper?",a:["Wohler & leichter fühlen","Straffer & definierter werden","Weniger Wassereinlagerungen / Entstauung","Unebenheiten / Cellulite reduzieren"]},
      {q:"Welcher Bereich hat aktuell die höchste Priorität?",a:["Bauch & Taille","Po","Beine","Arme","Rücken"]},
      {q:"Wie würdest du deine Gewebestruktur beschreiben?",a:["glatt","leichte Unebenheiten","sichtbare Cellulite / Wassereinlagerungen","stärker ausgeprägte Unebenheiten"]},
      {q:"Wie fühlt sich dein Körper im Alltag an?",a:["leicht & entspannt","schwer / gestaut","geschwollen"]},
      {q:"Welches Tempo passt für dich?",a:["sanfter Einstieg (1× pro Woche)","konstante Entwicklung (2× pro Woche)","intensiver Fokus (3× pro Woche)"]},
      {q:"Was motiviert dich aktuell zu starten?",a:["Reise / Sommer / Event","Wohlfühlen im eigenen Körper","Gesundheit & Vitalität","Selbstbewusstsein & Transformation"]}
    ],
    results:[
      {title:"Sanfter Ibiza-Einstieg",lead:"Sanfte Entstauung & Wohlfühlen — ideal zum Start deiner Körperroutine.",plan:"6–8 Sitzungen, 1×/Woche • Fokus: Lymphdrainage, leichte Körpermodellage, Meeres-Aromaölbehandlung"},
      {title:"Gezielte Konturierung",lead:"Ziel: Definition & sichtbares Hautbild — perfekt für Strand-Events auf Ibiza.",plan:"8–12 Sitzungen, 2×/Woche • Fokus: Cellulite-Reduktion, Hautstraffung, lokale Intensivbehandlung"},
      {title:"Intensiv-Transformation",lead:"Maximale Formung & Tiefeffekt — sichtbare Veränderung in kurzer Zeit.",plan:"10–15 Sitzungen, 2–3×/Woche • Fokus: tiefere Massageintensität, kombinierte Lymph- und Konturtechnik"}
    ]
  },
  es:{
    start:"Iniciar cuestionario",
    restart:"Reiniciar cuestionario",
    infoText:"Descubre tu programa personalizado de Maderoterapia para relajación, contorno y bienestar linfático durante tus vacaciones en Ibiza.",
    questions:[
      {q:"¿Qué es lo más importante para ti respecto a tu cuerpo?",a:["Sentirse más ligero","Tonificar & definir","Reducir retención de líquidos","Reducir celulitis / irregularidades"]},
      {q:"¿Qué zona tiene mayor prioridad actualmente?",a:["Abdomen & cintura","Glúteos","Piernas","Brazos","Espalda"]},
      {q:"¿Cómo describirías tu estructura tisular actual?",a:["Suave","Leve irregularidad","Celulitis visible / retención de líquidos","Irregularidades pronunciadas"]},
      {q:"¿Cómo se siente tu cuerpo en la vida diaria?",a:["Ligero & relajado","Pesado / congestionado","Hinchado"]},
      {q:"¿Qué ritmo te parece adecuado?",a:["Inicio suave (1×/semana)","Desarrollo constante (2×/semana)","Enfoque intensivo (3×/semana)"]},
      {q:"¿Qué te motiva más a empezar ahora?",a:["Viaje / verano / evento","Bienestar en tu cuerpo","Salud & vitalidad","Confianza & transformación"]}
    ],
    results:[
      {title:"Inicio suave en Ibiza",lead:"Drenaje linfático y bienestar — ideal para comenzar la rutina corporal.",plan:"6–8 sesiones, 1×/semana • Enfoque: drenaje linfático, modelado ligero, aceites aromáticos marinos"},
      {title:"Moldeado focalizado",lead:"Objetivo: definición & mejora visible de la piel — perfecto para eventos de playa en Ibiza.",plan:"8–12 sesiones, 2×/semana • Enfoque: reducción de celulitis, reafirmación, tratamiento intensivo local"},
      {title:"Transformación intensa",lead:"Máxima forma & efecto profundo — cambios visibles en poco tiempo.",plan:"10–15 sesiones, 2–3×/semana • Enfoque: masaje más intenso, técnica combinada de linfa y contorno"}
    ]
  }
};

let currentLang = "en";
let idx = 0;
let score = 0;

const quizSection = document.getElementById("quizSection");
const quizCard = document.getElementById("quizCard");
const resultSection = document.getElementById("resultSection");
const resultCard = document.getElementById("resultCard");
const startBtn = document.getElementById("startBtn");
const langSelect = document.getElementById("langSelect");
const infoTextEl = document.getElementById("info-text");

// Sprache dynamisch wechseln
langSelect.addEventListener("change", ()=>{
  currentLang = langSelect.value;
  const langObj = LANG[currentLang];
  startBtn.textContent = langObj.start;
  infoTextEl.textContent = langObj.infoText;
});

// Quiz starten
startBtn.addEventListener("click", ()=>{
  startBtn.classList.add("hidden");
  quizSection.classList.remove("hidden");
  idx = 0; score = 0;
  renderQuestion();
});

// Frage rendern
function renderQuestion(){
  const qObj = LANG[currentLang].questions[idx];
  quizCard.innerHTML = `
    <div class="quiz-question">${idx+1}. ${qObj.q}</div>
    <div class="choice-list">
      ${qObj.a.map((a,i)=>`<div class="choice"><button data-index="${i}">${a}</button></div>`).join("")}
    </div>
    <div style="margin-top:.6rem;text-align:right;color:#666">Question ${idx+1} of ${LANG[currentLang].questions.length}</div>
  `;
  quizCard.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      score += parseInt(btn.dataset.index)+1;
      idx++;
      if(idx<LANG[currentLang].questions.length) renderQuestion();
      else showResult();
    });
  });
}

// Ergebnis anzeigen
function showResult(){
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  let tier = score<=12?0:score<=20?1:2;
  const res = LANG[currentLang].results[tier];
  const langObj = LANG[currentLang];

  resultCard.innerHTML = `
    <h2>${res.title}</h2>
    <p>${res.lead}</p>
    <p><strong>Recommended plan:</strong> ${res.plan}</p>
    <hr/>
    <h3>Contact Us</h3>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact">
      <div class="form-row"><input name="name" placeholder="Name" required></div>
      <div class="form-row"><input name="email" type="email" placeholder="Email" required></div>
      <div class="form-row"><input name="phone" type="tel" placeholder="Phone Number" required></div>
      <div class="form-row"><textarea name="message" placeholder="Optional message or preferred area"></textarea></div>
      <div class="form-row"><button class="btn primary" type="submit">Send Request</button></div>
    </form>
    <div style="margin-top:1.5rem; text-align:center;">
      <button id="restartBtn" class="btn primary">${langObj.restart}</button>
    </div>
  `;

  document.getElementById("restartBtn").addEventListener("click", ()=>{
    resultSection.classList.add("hidden");
    startBtn.textContent = langObj.start;
    startBtn.classList.remove("hidden");
  });
}
