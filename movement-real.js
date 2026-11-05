'use strict';
/* Exercise-specific, offline SVG motion diagrams. Only validated mappings are shown. */
(()=>{
const scenes={
 'Sentadilla goblet':{title:'Sentadilla goblet',muscle:'Cuádriceps y glúteos',cue:'Mantén la mancuerna junto al pecho; flexiona cadera y rodillas.',kind:'squat'},
 'Sentadilla con mancuernas':{title:'Sentadilla con mancuernas',muscle:'Cuádriceps y glúteos',cue:'Baja con control, manteniendo los talones apoyados.',kind:'squat'},
 'Curl de bíceps':{title:'Curl de bíceps',muscle:'Bíceps',cue:'Mantén los codos cerca del torso; mueve los antebrazos.',kind:'curl'},
 'Curl martillo':{title:'Curl martillo',muscle:'Bíceps y braquial',cue:'Palmas enfrentadas; evita balancear el cuerpo.',kind:'curl'},
 'Elevación de pantorrillas':{title:'Elevación de pantorrillas',muscle:'Pantorrillas',cue:'Eleva los talones y vuelve lentamente al suelo.',kind:'calf'},
 'Elevaciones laterales':{title:'Elevaciones laterales',muscle:'Deltoides lateral',cue:'Eleva los brazos hacia los lados sin encoger hombros.',kind:'lateral'},
 'Press de hombros':{title:'Press de hombros',muscle:'Hombros y tríceps',cue:'Empuja las mancuernas sobre la cabeza sin arquear la espalda.',kind:'overhead'}
};
const svg=(kind)=>{
 const head='<circle cx="90" cy="37" r="13" fill="#F3C6A0"/>';
 const body='<path d="M90 52 L90 117" stroke="#8CE5CA" stroke-width="13" stroke-linecap="round"/>';
 const base='<path d="M90 116 L67 170 M90 116 L113 170" stroke="#8CE5CA" stroke-width="10" stroke-linecap="round" fill="none"/>';
 const arm='<path d="M90 65 L64 105 M90 65 L116 105" stroke="#F3C6A0" stroke-width="9" stroke-linecap="round" fill="none"/>';
 let figure='';
 if(kind==='squat')figure=`<g class="pose-squat">${head}${body}${base}${arm}<rect x="77" y="75" width="26" height="11" rx="4" fill="#7A93FF"/></g>`;
 if(kind==='curl')figure=`${head}${body}${base}<path d="M88 66 L64 100 M92 66 L116 100" stroke="#F3C6A0" stroke-width="9" fill="none"/><g class="pose-curl" stroke="#F3C6A0" stroke-width="9" stroke-linecap="round"><path d="M64 100 L62 132 M116 100 L118 132"/></g><g class="pose-curl"><rect x="51" y="128" width="22" height="9" rx="3" fill="#7A93FF"/><rect x="107" y="128" width="22" height="9" rx="3" fill="#7A93FF"/></g>`;
 if(kind==='calf')figure=`<g class="pose-calf">${head}${body}${base}${arm}</g>`;
 if(kind==='lateral')figure=`${head}${body}${base}<g class="pose-lateral"><path d="M90 66 L60 113 M90 66 L120 113" stroke="#F3C6A0" stroke-width="9" stroke-linecap="round" fill="none"/><rect x="49" y="110" width="22" height="9" rx="3" fill="#7A93FF"/><rect x="109" y="110" width="22" height="9" rx="3" fill="#7A93FF"/></g>`;
 if(kind==='overhead')figure=`${head}${body}${base}<g class="pose-overhead"><path d="M90 66 L62 93 L60 119 M90 66 L118 93 L120 119" stroke="#F3C6A0" stroke-width="9" stroke-linecap="round" fill="none"/><rect x="48" y="115" width="24" height="9" rx="3" fill="#7A93FF"/><rect x="108" y="115" width="24" height="9" rx="3" fill="#7A93FF"/></g>`;
 return `<svg viewBox="0 0 180 205" role="img" aria-label="Movimiento esquemático específico del ejercicio" xmlns="http://www.w3.org/2000/svg"><path d="M20 178 H160" stroke="#688390" stroke-width="2"/>${figure}</svg>`;
};
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.fitcasaExerciseVisual=name=>{
 const data=scenes[name];
 if(!data)return `<div class="real-movement"><p class="muted">No hay una demostración animada verificada para <strong>${escape(name)}</strong>. Consulta las instrucciones de técnica y evita imitar animaciones genéricas.</p></div>`;
 return `<div class="real-movement" data-kind="${data.kind}"><div class="real-figure">${svg(data.kind)}</div><strong>${escape(data.muscle)}</strong><p>${escape(data.cue)}</p><div class="real-controls"><button type="button" data-real-pause>⏸ Pausar</button><label>Velocidad <select data-real-speed><option value="slow">Lenta</option><option selected value="normal">Normal</option><option value="fast">Rápida</option></select></label></div><small>Diagrama animado específico, no video de una persona ni validación profesional de técnica.</small></div>`;
};
// Override the previous generic tip decoration by removing it and inserting exercise-specific visuals.
const prior=window.tipCard;
if(typeof prior==='function')window.tipCard=function(name){let html=prior(name);html=html.replace(/<details class="movement-details">[\s\S]*?<\/details>/,'');return `<details class="movement-details"><summary>▶ Ver movimiento y músculos trabajados</summary>${window.fitcasaExerciseVisual(name)}</details>`+html};
const decorate=()=>{document.querySelectorAll('.move-visual').forEach(el=>{const d=el.closest('.movement-details');if(!d)return;const exercise=d.closest('.exercise');const name=exercise?.querySelector('strong')?.textContent?.trim();if(name){el.outerHTML=window.fitcasaExerciseVisual(name)}})};
const originalRender=window.render;if(typeof originalRender==='function')window.render=function(...args){const out=originalRender.apply(this,args);decorate();return out};
new MutationObserver(decorate).observe(document.getElementById('view')||document.body,{childList:true,subtree:true});
document.addEventListener('click',e=>{const b=e.target.closest('[data-real-pause]');if(!b)return;const box=b.closest('.real-movement');const paused=box.classList.toggle('paused');b.textContent=paused?'▶ Reproducir':'⏸ Pausar'});
document.addEventListener('change',e=>{if(!e.target.matches('[data-real-speed]'))return;const box=e.target.closest('.real-movement');box.dataset.speed=e.target.value});
})();
