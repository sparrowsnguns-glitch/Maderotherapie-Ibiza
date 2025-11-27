const LANG = {
  en: {
    start: "Start Quiz",
    infoTitle: "What is Maderotherapy?",
    infoText: "Maderotherapy is a gentle to intensive wood-rolling massage using specialized tools to improve circulation, reduce swelling, refine body contours, and enhance skin texture. On Ibiza, we combine it with sea-inspired rituals and relaxing essential oil blends for a luxurious, feminine wellness experience.",
    questions: [
      {
        q:"What matters most to you right now regarding your body?",
        a:["Feel lighter & well","Firm & defined","Reduce water retention","Reduce cellulite/unevenness"]
      },
      {
        q:"Which area is your current priority?",
        a:["Abdomen & waist","Buttocks","Legs","Arms","Back"]
      },
      {
        q:"How would you describe your current tissue structure?",
        a:["Smooth","Slight unevenness","Visible cellulite / water retention","More pronounced unevenness"]
      },
      {
        q:"How does your body feel in daily life?",
        a:["Light & relaxed","Heavy / congested","Swollen"]
      },
      {
        q:"Which pace feels right for you?",
        a:["Gentle start (1×/week)","Consistent development (2×/week)","Intensive focus (3×/week)"]
      },
      {
        q:"What motivates you most to start now?",
        a:["Travel / Summer / Event","Well-being in own body","Health & vitality","Confidence & transformation"]
      }
    ],
    results:[
      {title:"Gentle Ibiza Start",lead:"Gentle lymphatic & wellbeing — ideal to start your body routine.",plan:"6–8 sessions, 1×/week • Focus: Lymph drainage, light body contouring, sea aroma oils"},
      {title:"Targeted Contouring",lead:"Goal: Definition & visible skin improvement — perfect for Ibiza beach events.",plan:"8–12 sessions, 2×/week • Focus: Cellulite reduction, skin firming, local intensive treatment"},
      {title:"Intensive Transformation",lead:"Maximum shaping & deep effect — visible changes in short time.",plan:"10–15 sessions, 2–3×/week • Focus: deeper massage intensity, combined lymph & contour technique"}
    ]
  }
};

let currentLang = "en";

const quizSection = document.getElementById("quizSection");
const quizCard = document.getElementById("quizCard");
const resultSection = document.getElementById("resultSection");
const resultCard = document.getElementById("resultCard");
const startBtn = document.getElementById("startBtn");
const langSelect = document.getElementById("langSelect");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");

let idx = 0, score = 0;

// Update language dynamically
langSelect.addEventListener("change", ()=> {
  currentLang = langSelect.value;
  const langObj = LANG[currentLang];
  startBtn.textContent = langObj.start;
  infoTitle.textContent = langObj.infoTitle;
  infoText.textContent = langObj.infoText;
});

// Start Quiz
startBtn.addEventListener("click", ()=> {
  startBtn.classList.add("hidden");
  quizSection.classList.remove("hidden");
  idx = 0;
  score = 0;
  renderQuestion();
});

// Render question
function renderQuestion() {
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

// Show result
function showResult(){
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  let tier;
  if(score<=12) tier=0;
  else if(score<=20) tier=1;
  else tier=2;

  const res = LANG[currentLang].results[tier];
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
      <div class="form-row"><textarea name="message" placeholder="Optional message or preferred area"></textarea></div>
      <div class="form-row"><button class="btn primary" type="submit">Send Request</button></div>
    </form>
  `;
}
