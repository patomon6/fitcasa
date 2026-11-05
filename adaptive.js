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
function configuration(){const s=db.settings||{};const age=Number(s.age)||0;const level=s.experience||'beginner';const mobility=s.mobility||'normal';const limitations=String(s.limitations||'').trim();const cautious=level==='beginner'&&(age>=65||mobility==='reduced');const h=s.health||{};const limited=mobility==='reduced'||h.pain&&h.pain!=='none'&&h.pain!=='unknown';const caution=h.condition&&h.condition!=='none'||h.restriction==='yes'||h.restriction==='unsure';return {age,level,mobility,limitations,cautious:cautious||caution,limited};}
function apply(){const c=configuration();for(const [day,base] of Object.entries(baseline)){plans[day]=base.map(x=>(c.cautious||c.limited)&&substitutions[x]?substitutions[x]:x)}
const existing=document.getElementById('adaptive-status');if(existing)existing.remove();
}
const old=render;render=function(){apply();old();apply()};
const prev=window.addEventListener; // no extra permissions or network requests
})();
