'use strict';
/* Per-profile conservative exercise adaptation. No diagnostic or medical claims. */
(()=>{
const baseline=Object.fromEntries(Object.entries(plans).map(([k,v])=>[k,[...v]]));
const substitutions={'Zancadas atrás':'Sentarse y levantarse de una silla','Sentadilla dividida':'Sentarse y levantarse de una silla','Sentadilla con mancuernas':'Sentadilla a silla','Sentadilla goblet':'Sentadilla a silla','Peso muerto rumano':'Bisagra de cadera sin peso','Press de hombros':'Empuje de pared','Press cerrado en suelo':'Empuje de pared','Plancha':'Plancha contra pared'};
const instructions={
'Sentarse y levantarse de una silla':['Desde una silla estable, levántate y vuelve a sentarte lentamente; utiliza apoyo si lo necesitas.','No uses una silla con ruedas; detente si aparece dolor.'],
'Sentadilla a silla':['Acerca la cadera hacia una silla firme y vuelve a subir con control.','Mantén los pies apoyados y no fuerces el rango.'],
'Bisagra de cadera sin peso':['Lleva la cadera hacia atrás con rodillas ligeramente flexionadas y espalda cómoda.','No redondees bruscamente la espalda ni añadas carga sin dominar el gesto.'],
'Empuje de pared':['Coloca las manos contra una pared firme y flexiona los codos lentamente.','Mantén el tronco alineado y evita dolor en hombros.'],
'Plancha contra pared':['Apoya antebrazos en pared, da un paso atrás y mantén el abdomen firme.','Respira normalmente; no aguantes la respiración.']};
Object.assign(exerciseTips,instructions);
function configuration(){const s=db.settings||{};const age=Number(s.age)||0;const level=s.experience||'beginner';const mobility=s.mobility||'normal';const limitations=String(s.limitations||'').trim();const cautious=level==='beginner'&&(age>=65||mobility==='reduced');const limited=mobility==='reduced';return {age,level,mobility,limitations,cautious,limited};}
function apply(){const c=configuration();for(const [day,base] of Object.entries(baseline)){plans[day]=base.map(x=>(c.cautious||c.limited)&&substitutions[x]?substitutions[x]:x)}
const existing=document.getElementById('adaptive-status');if(existing)existing.remove();const target=document.getElementById('view');if(!target||!['inicio','plan','entreno'].includes(tab))return;
const label=c.age>=65?'adulto mayor':c.age>=18?'adulto':'edad sin registrar';const warning=c.limitations?`<p class="notice">Has indicado limitaciones: ${esc(c.limitations)}. FitCasa no puede decidir si un ejercicio es seguro para tu condición. Consulta a un profesional y adapta o evita movimientos que produzcan dolor.</p>`:'';
const note=c.cautious||c.limited?'Se han seleccionado variantes de menor complejidad para empezar. La edad no impide entrenar fuerza.':'La rutina se basa en tu experiencia y registros; la edad no determina por sí sola la intensidad.';
const html=`<section id="adaptive-status" class="card" aria-label="Plan personalizado"><h2>🧭 Plan adaptado a tu perfil</h2><p><strong>${esc(label)}</strong> · ${c.level==='advanced'?'Avanzado':c.level==='intermediate'?'Intermedio':'Principiante'} · ${c.mobility==='reduced'?'Movilidad reducida':'Movilidad habitual'}</p><p>${note}</p>${warning}<p class="muted">Comienza con esfuerzo moderado, mantén buena técnica y confirma cómo te sentiste al terminar. Los pesos y repeticiones sugeridos no son mediciones de tu fuerza.</p></section>`;
target.insertAdjacentHTML('afterbegin',html);
}
const old=render;render=function(){apply();old();apply()};
const prev=window.addEventListener; // no extra permissions or network requests
})();
