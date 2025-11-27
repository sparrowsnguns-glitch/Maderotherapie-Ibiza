const LANG = {
  en: {
    start:"Start Quiz",
    restart:"Restart Quiz",
    infoText:"Discover your personalized Maderotherapy plan for relaxation, contouring, and lymphatic wellness during your Ibiza vacation.",
    questions:[
      {q:"What matters most to you regarding your body?",a:["Feel lighter & well","Firm & defined","Reduce water retention","Reduce cellulite / unevenness"]},
      {q:"Which area has your current priority?",a:["Abdomen & waist","Buttocks","Legs","Arms","Back"]},
      {q:"How would you describe your current tissue structure?",a:["Smooth","Slight unevenness","Visible cellulite / water retention","More pronounced unevenness"]},
      {q:"Do you tend to bruise easily?",a:["Very easily","Sometimes","Rarely","Almost never"]},
      {q:"How does your body feel in daily life?",a:["Light & relaxed","Heavy / congested","Swollen"]},
      {q:"Which pace feels right for you?",a:["Gentle start (1×/week)","Consistent development (2×/week)","Intensive focus (3×/week)"]}
    ],
    results:[
      {title:"Instant Glow / Holiday Boost",lead:"Perfect for short Ibiza stays (3–7 days) with fast visible effect.",plan:"1–2 sessions • Focus: light sculpting & drainage."},
      {title:"Contour Essentials",lead:"Foundational sculpting for a firmer, smoother body shape.",plan:"3–4 sessions • Focus: body contouring & skin tightening."},
      {title:"Body Refinement",lead:"Visible improvement of skin texture & firmness.",plan:"5–6 sessions • Focus: contouring & cellulite visibility reduction."},
      {title:"Sculpt & Smooth",lead:"Targeted shaping & stronger definition.",plan:"8–10 sessions • Focus: firming & deeper manual work."},
      {title:"Complete Body Reset",lead:"Transformational program for deeper structural change.",plan:"12–15 sessions • Focus: complete sculpting & long-term improvement."}
    ]
  },
  de:{/* DE Version gleich aufgebaut wie EN */},
  es:{/* ES Version gleich aufgebaut wie EN */},
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
  const langObj=LANG[currentLang];
  startBtn.textContent=langObj.start;
  infoTextEl.textContent=langObj.infoText;
});

startBtn.addEventListener("click",()=>{
  startBtn.classList.add("hidden");
  quizSection.classList.remove("hidden");
  idx=0; score=0;
  renderQuestion();
});

function renderQuestion(){
  const qObj=LANG[currentLang].questions[idx];
  quizCard.innerHTML=`
<div class="quiz-question">${idx+1}. ${qObj.q}</div>
<div class="choice-list">
${qObj.a.map((a,i)=>`<div class="choice"><button data-index="${i}">${a}</button></div>`).join("")}
</div>
<div style="margin-top:.6rem;text-align:right;color:#666">Question ${idx+1} of ${LANG[currentLang].questions.length}</div>
  `;
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
  let tier = score<=9?0:score<=13?1:score<=17?2:score<=21?3:4;
  const res=LANG[currentLang].results[tier];
  const langObj=LANG[currentLang];
  resultCard.innerHTML=`
<h2>${res.title}</h2>
<p>${res.lead}</p>
<p><strong>Recommended plan:</strong> ${res.plan}</p>
<hr/>
<h3>Contact via WhatsApp</h3>
<a href="https://wa.me/4915901023189?text=Hello%2C%20I%20would%20like%20to%20book%20my%20Maderotherapy%20session" target="_blank" class="btn primary" style="width:100%;">Send via WhatsApp</a>
<div style="margin-top:1.5rem; text-align:center;">
<button id="restartBtn" class="btn primary">${langObj.restart}</button>
</div>
  `;
  document.getElementById("restartBtn").addEventListener("click",()=>{
    idx=0; score=0;
    quizSection.classList.add("hidden");
    resultSection.classList.add("hidden");
    startBtn.textContent=langObj.start;
    startBtn.classList.remove("hidden");
    window.scrollTo({ top:0, behavior:'smooth' });
  });
}
