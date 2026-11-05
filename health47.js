'use strict';
/* FitCasa 4.7: conservative, non-diagnostic health gate. No remote transfers. */
(()=>{
const escapeHTML=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const state=()=>{const h=db.settings?.health||{};if(['chest','faint','breath','other'].includes(h.symptoms))return 'red';if(!h.consent||h.condition!=='none'||h.restriction!=='no'||h.pain!=='none')return 'yellow';return 'green'};
const messages={red:'Declaraste síntomas que pueden ser señales de alarma. No inicies una rutina exigente. Si son actuales o intensos, busca atención médica urgente.',yellow:'Tu información requiere precaución. Se ofrecen adaptaciones conservadoras; consulta a un profesional para determinar qué ejercicios son adecuados.',green:'No declaraste condiciones conocidas ni síntomas de alarma. Comienza progresivamente y detente ante molestias inusuales.'};
const previous=render;
render=function(){previous();const v=document.getElementById('view');if(!v)return;
if(tab==='inicio'||tab==='entreno'||tab==='ajustes'){
 const level=state();const el=document.createElement('section');el.className='health47-card '+level;
 el.innerHTML=`<div class="health47-heading"><strong>Salud y seguridad</strong><span>${level==='red'?'Atención':level==='yellow'?'Precaución':'Evaluación inicial'}</span></div><p>${escapeHTML(messages[level])}</p>${tab==='ajustes'?'<button id="health47-update" type="button">Actualizar respuestas de salud</button>':''}`;
 if(tab==='inicio')v.append(el);else v.prepend(el);
 if(level==='red'&&tab==='entreno'){v.querySelectorAll('button').forEach(b=>{if(/iniciar|comenzar|entrenar ahora|start/i.test(b.textContent||'')){b.disabled=true;b.title='Requiere evaluación profesional antes de entrenamiento exigente'}})}
 }
};
document.addEventListener('click',e=>{if(e.target.closest('#health47-update')){document.getElementById('family-edit')?.click();return}
 if(state()==='red'&&e.target.closest('[data-tab="entreno"]')){ /* show safety panel, do not conceal the section */ }
},true);
})();
