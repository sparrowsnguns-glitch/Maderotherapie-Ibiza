const LANG = {
  en: {
    start:"Start Quiz",
    restart:"Restart Quiz",
    infoText:"Discover your personalized Maderotherapy plan for relaxation, contouring, and lymphatic wellness during your Ibiza vacation.",
    questions:[
      {q:"What matters most to you regarding your body?",a:["Feel lighter & well","Firm & defined","Reduce water retention","Reduce cellulite / unevenness"]},
      {q:"Which area has your current priority?",a:["Abdomen & waist","Buttocks","Legs","Arms","Back"]},
      {q:"How would you describe your current tissue structure?",a:["Smooth","Slight unevenness","Visible cellulite / water retention","More pronounced unevenness"]},
      {q:"How does your body feel in daily life?",a:["Light & relaxed","Heavy / congested","Swollen"]},
      {q:"Which pace feels right for you?",a:["Gentle start (1×/week)","Consistent development (2×/week)","Intensive focus (3×/week)"]},
      {q:"What motivates you most to start?",a:["Holiday / Event","Feel good in my body","Health & vitality","Confidence & transformation"]}
    ],
    results:[
      {title:"Instant Glow / Holiday Boost",lead:"Perfect for short Ibiza stays (3–7 days) with fast visible effect.",plan:"1–2 sessions • Focus: light sculpting & drainage."},
      {title:"Contour Essentials",lead:"Foundational sculpting for a firmer, smoother body shape.",plan:"3–4 sessions • Focus: body contouring & skin tightening."},
      {title:"Body Refinement",lead:"Visible improvement of skin texture & firmness.",plan:"5–6 sessions • Focus: contouring & cellulite visibility reduction."},
      {title:"Sculpt & Smooth",lead:"Targeted shaping & stronger definition.",plan:"8–10 sessions • Focus: firming & deeper manual work."},
      {title:"Complete Body Reset",lead:"Transformational program for deeper structural change.",plan:"12–15 sessions • Focus: complete sculpting & long-term improvement."}
    ]
  },
  de: {
    start:"Quiz starten",
    restart:"Quiz neu starten",
    infoText:"Entdecke dein persönliches Maderotherapie-Programm für Entspannung, Konturierung und Lymph-Wellness während deines Ibiza-Urlaubs.",
    questions:[
      {q:"Was ist dir aktuell am wichtigsten für deinen Körper?",a:["Wohler & leichter fühlen","Straffer & definierter werden","Weniger Wassereinlagerungen / Entstauung","Unebenheiten / Cellulite reduzieren"]},
      {q:"Welcher Bereich hat aktuell die höchste Priorität?",a:["Bauch & Taille","Po","Beine","Arme","Rücken"]},
      {q:"Wie würdest du deine Gewebestruktur beschreiben?",a:["glatt","leichte Unebenheiten","sichtbare Cellulite / Wassereinlagerungen","stärker ausgeprägte Unebenheiten"]},
      {q:"Wie fühlt sich dein Körper im Alltag an?",a:["leicht & entspannt","schwer / gestaut","geschwollen"]},
      {q:"Was motiviert dich am meisten, jetzt zu starten?",a:["Urlaub / Event","Wohlfühlen im Körper","Gesundheit & Vitalität","Selbstbewusstsein & Transformation"]},
      {q:"Welches Tempo passt für dich?",a:["sanfter Einstieg (1×/Woche)","konstante Entwicklung (2×/Woche)","intensiver Fokus (3×/Woche)"]}
    ],
    results:[
      {title:"Instant Glow / Holiday Boost",lead:"Ideal für 3–7 Tage Aufenthalt mit sofort sichtbarem Effekt.",plan:"1–2 Sitzungen • Fokus: leichte Modellage & Entstauung."},
      {title:"Contour Essentials",lead:"Basis-Formung für eine straffere, glattere Silhouette.",plan:"3–4 Sitzungen • Fokus: Körperformung & Hautstraffung."},
      {title:"Body Refinement",lead:"Sichtbar straffere Hautstruktur & definiertere Form.",plan:"5–6 Sitzungen • Fokus: Kontur & Cellulite-Reduktion."},
      {title:"Sculpt & Smooth",lead:"Gezielte Formgebung & stärkere Definition.",plan:"8–10 Sitzungen • Fokus: tiefere Straffung & Definition."},
      {title:"Complete Body Reset",lead:"Transformation mit nachhaltigem Straffungseffekt.",plan:"12–15 Sitzungen • Fokus: vollständige Modellage & tiefgreifende Konturveränderung."}
    ]
  },
  es: {
    start:"Iniciar cuestionario",
    restart:"Reiniciar cuestionario",
    infoText:"Descubre tu programa personalizado de Maderoterapia para relajación, contorno y bienestar linfático durante tus vacaciones en Ibiza.",
    questions:[
      {q:"¿Qué es lo más importante para ti respecto a tu cuerpo?",a:["Sentirse más ligero","Tonificar & definir","Reducir retención de líquidos","Reducir celulitis / irregularidades"]},
      {q:"¿Qué zona tiene mayor prioridad actualmente?",a:["Abdomen & cintura","Glúteos","Piernas","Brazos","Espalda"]},
      {q:"¿Qué te motiva más a empezar?",a:["Vacaciones / Evento","Sentirse bien en el cuerpo","Salud & vitalidad","Confianza & transformación"]},
      {q:"¿Cómo se siente tu cuerpo diariamente?",a:["Ligero & relajado","Pesado / congestionado","Hinchado"]},
      {q:"¿Qué ritmo te parece adecuado?",a:["Inicio suave (1×/sem)","Desarrollo constante (2×/sem)","Enfoque intensivo (3×/sem)"]},
      {q:"¿Qué objetivo te motiva más?",a:["Salud","Bienestar","Confianza","Transformación"]}
    ],
    results:[
      {title:"Instant Glow / Holiday Boost",lead:"Perfecto para estancias cortas en Ibiza con efecto visible inmediato.",plan:"1–2 sesiones • Enfoque: drenaje & modelado ligero."},
      {title:"Contour Essentials",lead:"Base esencial para una silueta más firme y definida.",plan:"3–4 sesiones • Enfoque: moldeado corporal & reafirmación."},
      {title:"Body Refinement",lead:"Mejora visible de la firmeza y textura de la piel.",plan:"5–6 sesiones • Enfoque: contorno & reducción de celulitis."},
      {title:"Sculpt & Smooth",lead:"Definición más intensa y forma más marcada.",plan:"8–10 sesiones • Enfoque: firmeza profunda."},
      {title:"Complete Body Reset",lead:"Programa transformador para resultados duraderos.",plan:"12–15 sesiones • Enfoque: cambio estructural & firmeza profunda."}
    ]
  }
};

let currentLang="en", idx=0, score=0;
const quizSection=document.getElementById("quizSection");
const quizCard=document.getElementById("quizCard");
const resultSection=document.getElementById("resultSection");
const resultCard=document.getElementById("resultCard");
const startBtn=document.getElementById("startBtn");
const langSelect=document.getElementById("langSelect");
const infoTextEl=document.getElementById("info-text");
const yearSpan=document.getElementById("year");
if(yearSpan) yearSpan.textContent=new Date().getFullYear();

langSelect.addEventListener("change",()=>{
  currentLang=langSelect.value;
  idx=0; score=0;
  quizSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  startBtn.textContent=LANG[currentLang].start;
  infoTextEl.textContent=LANG[currentLang].infoText;
  startBtn.classList.remove("hidden");
});

startBtn.addEventListener("click",()=>{
  startBtn.classList.add("hidden");
  quizSection.classList.remove("hidden");
  idx=0; score=0;
  renderQuestion();
});

function renderQuestion(){
  const qObj=LANG[currentLang].questions[idx];
  quizCard.innerHTML=`<div class="quiz-question">${idx+1}. ${qObj.q}</div>
  <div class="choice-list">
    ${qObj.a.map((a,i)=>`<div class="choice"><button data-index="${i}">${a}</button></div>`).join("")}
  </div>
  <div style="margin-top:.6rem;text-align:right;color:#666">Question ${idx+1} of ${LANG[currentLang].questions.length}</div>`;

  quizCard.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      score+=parseInt(btn.dataset.index)+1;
      idx++;
      if(idx<LANG[currentLang].questions.length) renderQuestion();
      else showResult();
    });
  });
}

function showResult(){
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  let tier=score<=6?0:score<=10?1:score<=14?2:score<=18?3:4;
  const res=LANG[currentLang].results[tier];
  const langObj=LANG[currentLang];

  resultCard.innerHTML=`
<h2>${res.title}</h2>
<p>${res.lead}</p>
<p><strong>Recommended plan:</strong> ${res.plan}</p>
<hr/>
<h3>Contact & WhatsApp</h3>
<a href="https://wa.me/4915901023189" target="_blank" class="btn primary" style="width:100%;text-align:center;">WhatsApp Nicole</a>
<div style="margin-top:1.5rem;text-align:center;">
<button id="restartBtn" class="btn primary">${langObj.restart}</button>
</div>
`;

  document.getElementById("restartBtn").addEventListener("click",()=>{
    idx=0; score=0;
    quizSection.classList.add("hidden");
    resultSection.classList.add("hidden");
    startBtn.textContent=langObj.start;
    startBtn.classList.remove("hidden");
    window.scrollTo({top:0,behavior:'smooth'});
  });
}
