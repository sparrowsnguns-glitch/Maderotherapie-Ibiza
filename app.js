/* ---------------- LANGUAGE + CONTENT (uses your updated questions/results) ---------------- */
const LANG = {
  en: {
    start:"Start Quiz",
    restart:"Restart Quiz",
    infoText:"Discover your personalized Maderotherapy plan for relaxation, contouring and lymphatic wellness during your Ibiza stay.",
    questions:[
      {q:"What matters most to you regarding your body?",a:["Feel lighter & well","Firm & defined","Reduce water retention","Reduce cellulite / unevenness"]},
      {q:"Which area is your current priority?",a:["Abdomen & waist","Buttocks","Legs","Arms","Back"]},
      {q:"How would you describe your current tissue structure?",a:["Smooth","Slight unevenness","Visible cellulite / water retention","More pronounced unevenness"]},
      {q:"Do you tend to bruise easily?",a:["Very easily","Sometimes","Rarely","Almost never"]},
      {q:"How does your body feel in daily life?",a:["Light & relaxed","Heavy / congested","Swollen"]},
      {q:"Which pace feels right for you?",a:["Gentle start (1×/week)","Consistent development (2×/week)","Intensive focus (3×/week)"]}
    ],
    results:[
      {title:"Instant Glow / Holiday Boost",lead:"Perfect for short Ibiza stays (3–7 days) with fast visible effect.",plan:"1–2 sessions • Light sculpting & drainage."},
      {title:"Contour Essentials",lead:"Foundational sculpting for a firmer, smoother body shape.",plan:"3–4 sessions • Body contouring & tightening."},
      {title:"Body Refinement",lead:"Visible improvement of skin texture & firmness.",plan:"5–6 sessions • Contour & cellulite reduction."},
      {title:"Sculpt & Smooth",lead:"Targeted shaping & stronger definition.",plan:"8–10 sessions • Deep sculpting & firming."},
      {title:"Complete Body Reset",lead:"Transformational long-term program.",plan:"12–15 sessions • Full sculpting & reshaping."}
    ]
  },
  de:{
    start:"Quiz starten",
    restart:"Quiz neu starten",
    infoText:"Entdecke dein persönliches Maderotherapie Programm für deinen Ibiza-Urlaub.",
    questions:[
      {q:"Was ist dir aktuell am wichtigsten für deinen Körper?",a:["Wohler fühlen","Straffer werden","Wassereinlagerungen reduzieren","Cellulite reduzieren"]},
      {q:"Welcher Bereich ist Priorität?",a:["Bauch","Po","Beine","Arme","Rücken"]},
      {q:"Wie ist deine Gewebestruktur?",a:["glatt","leicht uneben","sichtbare Cellulite","ausgeprägte Unebenheiten"]},
      {q:"Tendierst du zu blauen Flecken?",a:["ja, stark","manchmal","selten","kaum"]},
      {q:"Wie fühlt sich dein Körper an?",a:["leicht","schwer","geschwollen"]},
      {q:"Welches Tempo passt?",a:["sanft (1×/Woche)","stetig (2×/Woche)","intensiv (3×/Woche)"]}
    ],
    results:[
      {title:"Instant Glow / Holiday Boost",lead:"Ideal für 3–7 Tage Aufenthalt.",plan:"1–2 Sitzungen • leichte Modellage & Entstauung."},
      {title:"Contour Essentials",lead:"Grundformung für straffere Silhouette.",plan:"3–4 Sitzungen • Körperformung & Straffung."},
      {title:"Body Refinement",lead:"Glattere Haut & definiertere Form.",plan:"5–6 Sitzungen • Kontur + Cellulite Reduktion."},
      {title:"Sculpt & Smooth",lead:"Gezielte Formgebung & Straffung.",plan:"8–10 Sitzungen • tiefere Definition."},
      {title:"Complete Body Reset",lead:"Nachhaltige Transformation.",plan:"12–15 Sitzungen • komplette Modellage."}
    ]
  },
  es:{
    start:"Iniciar cuestionario",
    restart:"Reiniciar",
    infoText:"Descubre tu programa personalizado de Maderoterapia para tus vacaciones en Ibiza.",
    questions:[
      {q:"¿Qué es lo más importante para ti?",a:["Sentirse ligera","Tonificar","Retención de líquidos","Celulitis"]},
      {q:"¿Qué zona es prioridad?",a:["Abdomen","Glúteos","Piernas","Brazos","Espalda"]},
      {q:"Tu estructura tisular:",a:["Suave","Irregular leve","Celulitis visible","Irregular fuerte"]},
      {q:"¿Moretones fáciles?",a:["Sí","A veces","Raro","No"]},
      {q:"¿Cómo se siente tu cuerpo?",a:["Ligero","Pesado","Hinchado"]},
      {q:"¿Qué ritmo prefieres?",a:["Suave","Constante","Intenso"]}
    ],
    results:[
      {title:"Instant Glow / Holiday Boost",lead:"Ideal para estancias cortas.",plan:"1–2 sesiones • drenaje + moldeado ligero."},
      {title:"Contour Essentials",lead:"Base de una silueta más firme.",plan:"3–4 sesiones • contorno + reafirmación."},
      {title:"Body Refinement",lead:"Mejora visible de la piel.",plan:"5–6 sesiones • contorno + celulitis."},
      {title:"Sculpt & Smooth",lead:"Modelado profundo.",plan:"8–10 sesiones • firmeza avanzada."},
      {title:"Complete Body Reset",lead:"Transformación completa.",plan:"12–15 sesiones • remodelación total."}
    ]
  }
};

/* ---------------- UI Refs + State ---------------- */
let currentLang = "en";
let idx = 0;
let score = 0;
let choices = [];

const quizSection = document.getElementById("quizSection");
const quizCard = document.getElementById("quizCard");
const resultSection = document.getElementById("resultSection");
const resultCard = document.getElementById("resultCard");
const startBtn = document.getElementById("startBtn");
const langSelect = document.getElementById("langSelect");
const infoTextEl = document.getElementById("info-text");
const yearSpan = document.getElementById("year");
if(yearSpan) yearSpan.textContent = new Date().getFullYear();

/* -------------- Language change -------------- */
langSelect.addEventListener("change", ()=>{
  currentLang = langSelect.value;
  const L = LANG[currentLang];
  startBtn.textContent = L.start;
  infoTextEl.textContent = L.infoText;
});

/* -------------- Start quiz -------------- */
startBtn.addEventListener("click", ()=>{
  startBtn.classList.add("hidden");
  document.querySelector('.hero-inner')?.classList?.add?.('hidden'); // keep hero text tidy if present
  quizSection.classList.remove("hidden");
  idx = 0; score = 0; choices = [];
  renderQuestion();
});

/* -------------- Render question -------------- */
function renderQuestion(){
  const L = LANG[currentLang];
  const qObj = L.questions[idx];
  quizCard.classList.add('animated');

  quizCard.innerHTML = `
    <div class="quiz-question">${idx+1}. ${qObj.q}</div>
    <div class="choice-list">
      ${qObj.a.map((a,i)=>`<button class="choice" data-index="${i}" data-text="${escapeHtml(a)}">${a}</button>`).join('')}
    </div>
    <div class="progress">${idx+1} / ${L.questions.length}</div>
  `;

  // attach handlers
  quizCard.querySelectorAll('button.choice').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const p = parseInt(btn.dataset.index,10) + 1;
      score += p;
      choices.push(btn.dataset.text || btn.textContent);
      idx++;
      if(idx < LANG[currentLang].questions.length) {
        // small delay for tactile feel
        setTimeout(()=> renderQuestion(), 180);
      } else {
        setTimeout(()=> showResult(), 220);
      }
    });
  });
}

/* -------------- Show result -------------- */
function showResult(){
  quizSection.classList.add('hidden');
  resultSection.classList.remove('hidden');
  resultCard.classList.add('floating');

  const L = LANG[currentLang];
  // tiers chosen as per your mapping
  let tier = (score<=9)?0:(score<=13)?1:(score<=17)?2:(score<=21)?3:4;
  const res = L.results[tier];

  resultCard.innerHTML = `
    <h2>${escapeHtml(res.title)}</h2>
    <p>${escapeHtml(res.lead)}</p>
    <p><strong>${currentLang==='de' ? 'Empfohlenes Programm' : currentLang==='es' ? 'Plan recomendado' : 'Recommended plan'}:</strong> ${escapeHtml(res.plan)}</p>
    <hr/>
    <div class="card floating" style="margin-top:0.8rem;padding:1rem;">
      <h3>${currentLang==='de' ? 'Fast fertig!' : currentLang==='es' ? '¡Casi listo!' : 'Almost done!'}</h3>
      <p style="margin:.4rem 0 .9rem;color:var(--muted)">${currentLang==='de' ? 'Trage deine Kontaktdaten ein, wir senden dir eine WhatsApp Nachricht.' : currentLang==='es' ? 'Introduce tus datos y te enviaremos un WhatsApp.' : 'Enter your contact details; we will send a WhatsApp message with your result.'}</p>

      <div id="contactForm" >
        <div class="form-row"><input id="cf-name" name="name" type="text" placeholder="${currentLang==='de' ? 'Name' : currentLang==='es' ? 'Nombre' : 'Name'}" required></div>
        <div class="form-row"><input id="cf-email" name="email" type="email" placeholder="Email" required></div>
        <div class="form-row"><input id="cf-phone" name="phone" type="tel" placeholder="${currentLang==='de' ? 'Telefon (optional)' : currentLang==='es' ? 'Teléfono (opcional)' : 'Phone (optional)'}"></div>
        <div style="display:flex;gap:.6rem;align-items:center;justify-content:center;margin-top:.6rem;">
          <button id="waBtn" class="whatsapp-btn" type="button">
            <span class="whatsapp-bubble">💬</span>
            <span>${currentLang==='de' ? 'Send via WhatsApp' : currentLang==='es' ? 'Enviar por WhatsApp' : 'Send via WhatsApp'}</span>
          </button>
        </div>

        <div id="thank" class="thanks hidden">${currentLang==='de' ? 'Danke! Wir melden uns per WhatsApp.' : currentLang==='es' ? '¡Gracias! Te contactaremos por WhatsApp.' : 'Thank you! We will contact you on WhatsApp.'}</div>
      </div>
    </div>

    <div style="text-align:center;margin-top:1rem;">
      <button id="restartBtn" class="btn primary">${L.restart}</button>
    </div>
  `;

  // attach WA click
  document.getElementById('waBtn').addEventListener('click', ()=> {
    const name = document.getElementById('cf-name').value || '';
    const email = document.getElementById('cf-email').value || '';
    const phone = document.getElementById('cf-phone').value || '';
    if(!email && !phone && !name){
      alert(currentLang==='de' ? 'Bitte gib mindestens deinen Namen oder E-Mail an.' : currentLang==='es' ? 'Por favor, introduce al menos tu nombre o correo.' : 'Please provide at least your name or email.');
      return;
    }

    // prepare message
    const msgLines = [];
    msgLines.push(`Maderotherapy lead — ${currentLang.toUpperCase()}`);
    msgLines.push(`Name: ${name}`);
    msgLines.push(`Email: ${email}`);
    msgLines.push(`Phone: ${phone}`);
    msgLines.push(`Result: ${res.title}`);
    msgLines.push(`Plan: ${res.plan}`);
    msgLines.push(`Answers: ${choices.join(' | ')}`);

    const text = msgLines.join('\n');
    const waNumber = '4915901023189'; // your provided number, without "+"
    const url = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text);

    // open WhatsApp and show thank you
    window.open(url, '_blank');
    const contactForm = document.getElementById('contactForm');
    contactForm.style.display = 'none';
    document.getElementById('thank').classList.remove('hidden');
  });

  // restart
  document.getElementById('restartBtn').addEventListener('click', ()=>{
    idx = 0; score = 0; choices = [];
    resultSection.classList.add('hidden');
    startBtn.classList.remove('hidden');
    quizSection.classList.add('hidden');
    // restore hero lead text
    infoTextEl.textContent = LANG[currentLang].infoText;
    window.scrollTo({top:0,behavior:'smooth'});
  });
}

/* escape helper to avoid accidental HTML injection from content */
function escapeHtml(str){
  if(!str) return '';
  return String(str).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]); });
}
