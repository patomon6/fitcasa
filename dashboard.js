 'use strict';
/* FitCasa 3.2: dashboard live; all metrics are derived from saved records. */
(()=>{
 const weekdays=['Lunes','Martes','Jueves','Viernes'];
 const fmtMinutes=ms=>Math.floor(Math.max(0,ms)/60000)+'m '+String(Math.floor(Math.max(0,ms)/1000)%60).padStart(2,'0')+'s';
 function panel(){
  const week=currentWeek, daysDone=weekdays.filter(d=>db.checks[`${week}:${d}:done`]).length;
  const day=selectedDay, exercises=plans[day]||[],done=exercises.filter(x=>db.checks[`${week}:${day}:${x}`]).length;
  const timer=db.timer,active=!!timer,completed=db.sessions.filter(x=>x.completed).length;
  const last=[...db.measurements].filter(x=>Number(x.weight)>0).sort((a,b)=>b.date.localeCompare(a.date))[0];
  const weight=last?Number(last.weight):null,initial=Number(db.settings.start),goal=Number(db.settings.goal);
  const weightPct=weight!==null&&initial>goal?Math.max(0,Math.min(100,(initial-weight)/(initial-goal)*100)):0;
  const minutes=db.sessions.reduce((s,x)=>s+(Number(x.durationMs)||0),0)+(active?elapsed(timer):0);
  const weekPct=Math.round(daysDone/4*100), exercisePct=exercises.length?Math.round(done/exercises.length*100):0;
  const clockHtml=active?`<div class="live-main-clock" id="dash-clock">${clock(elapsed(timer))}</div><div class="live-state">${timer.status==='running'?'● EN ENTRENAMIENTO':'Ⅱ SESIÓN PAUSADA'} · ${esc(timer.day)} · Semana ${timer.week}</div>`:`<div class="live-main-clock">${fmtMinutes(minutes)}</div><div class="live-state">Tiempo activo acumulado registrado</div>`;
  return `<section class="premium-panel" aria-label="Panel de progreso"><div class="premium-top"><div><span class="premium-kicker">FITCASA · TU PROGRESO</span><h2>Panel de rendimiento</h2><p>Datos de tu perfil · ${esc(TODAY())}</p></div><span class="premium-icon">✦</span></div>
   <div class="live-clock-card">${clockHtml}<div class="live-actions"><button class="primary" data-dash="train">${active?'Ver sesión activa':'▶ Comenzar entrenamiento'}</button><button data-dash="stats">Ver mis estadísticas</button></div></div>
   <div class="premium-stats"><div><small>Semana ${week}</small><strong>${daysDone}/4</strong><span>Sesiones completas</span></div><div><small>Ejercicios · ${esc(day)}</small><strong>${done}/${exercises.length}</strong><span>Confirmados</span></div><div><small>Sesiones históricas</small><strong>${completed}</strong><span>Finalizadas</span></div><div><small>Peso registrado</small><strong>${weight===null?'—':fmt(weight)+' kg'}</strong><span>Última medición</span></div></div>
   <div class="premium-bars"><div class="premium-barline"><span>Plan semanal</span><b>${weekPct}%</b></div><div class="premium-track"><span style="width:${weekPct}%"></span></div><div class="premium-barline"><span>Ejercicios de ${esc(day)}</span><b>${exercisePct}%</b></div><div class="premium-track"><span style="width:${exercisePct}%"></span></div><div class="premium-barline"><span>Camino a ${fmt(goal)} kg</span><b>${Math.round(weightPct)}%</b></div><div class="premium-track"><span style="width:${weightPct}%"></span></div></div>
   <div class="premium-links"><button data-dash="plan">📅 Mi plan</button><button data-dash="medidas">⚖️ Peso</button><button data-dash="alimentos">🥗 Alimentación</button><button data-dash="bici">🚴 Bicicleta</button></div>
   <p class="premium-footnote">Las barras muestran registros confirmados, no estimaciones de calorías ni de grasa perdida. El tiempo se actualiza durante una sesión activa.</p></section>`;
 }
 const previous=render;
 render=function(){previous();if(tab==='inicio'){const view=document.querySelector('#view');if(view)view.insertAdjacentHTML('afterbegin',panel())}};
 document.addEventListener('click',e=>{const btn=e.target.closest('[data-dash]');if(!btn)return;const dest=btn.dataset.dash;tab=dest==='train'?'entreno':dest==='stats'?'estadisticas':dest; if(dest==='train'&&db.timer){currentWeek=db.timer.week;selectedDay=db.timer.day}render()});
 setInterval(()=>{const el=document.getElementById('dash-clock');if(el&&db.timer)el.textContent=clock(elapsed(db.timer))},500);
})();
