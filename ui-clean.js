 'use strict';
(()=>{
const quotes=[
 ['Cada paso cuenta.','ES'],['You can do it.','EN'],['Você consegue!','PT'],
 ['La constancia supera la prisa.','ES'],['Keep moving forward.','EN'],['Un pas à la fois.','FR'],
 ['Tu ritmo también es progreso.','ES'],['Du schaffst das!','DE'],['Oggi è un nuovo inizio.','IT'],
 ['Lo importante es continuar.','ES'],['Believe in yourself.','EN'],['Vai no seu ritmo.','PT']
];
let quoteIndex=Math.floor(Date.now()/9000)%quotes.length;
function updateQuote(){const el=document.getElementById('clean-quote');if(!el||document.hidden)return;quoteIndex=(quoteIndex+1)%quotes.length;el.classList.remove('quote-visible');setTimeout(()=>{if(!el.isConnected)return;el.textContent=quotes[quoteIndex][0];el.lang=quotes[quoteIndex][1].toLowerCase();const lang=document.getElementById('clean-quote-lang');if(lang)lang.textContent=quotes[quoteIndex][1];el.classList.add('quote-visible')},220)}
setInterval(updateQuote,9000);
const old=render;
render=function(){old();if(tab!=='inicio')return;const view=document.getElementById('view');if(!view)return;
const name=profiles.items.find(p=>p.id===profiles.active)?.name||'Hola';
const first=document.createElement('section');first.className='clean-welcome';first.innerHTML=`<span class="clean-eyebrow">MI ESPACIO</span><h1>Hola, ${esc(name)} 👋</h1><div class="quote-rotator" aria-live="off"><p id="clean-quote" class="quote-visible">${quotes[quoteIndex][0]}</p><span id="clean-quote-lang" aria-label="Idioma">${quotes[quoteIndex][1]}</span></div><button class="primary" id="clean-train">${db.timer?'Continuar entrenamiento':'Entrenar ahora'} →</button>`;
view.prepend(first);
view.querySelector('.hero')?.remove();view.querySelector('.pro-panel')?.remove();
const panel=view.querySelector('.premium-panel');if(panel){panel.querySelector('.live-actions')?.remove();panel.querySelector('.premium-links')?.remove();panel.querySelector('.premium-footnote')?.remove();panel.querySelector('.premium-icon')?.remove();const title=panel.querySelector('.premium-top h2');if(title)title.textContent='Mi progreso';const kicker=panel.querySelector('.premium-kicker');if(kicker)kicker.textContent='RESUMEN';}
const metric=view.querySelector('.family-dashboard');if(metric){metric.classList.add('clean-details');const details=document.createElement('details');details.className='clean-health';details.innerHTML='<summary>Ver indicadores de salud</summary>';metric.replaceWith(details);details.append(metric)}
const heading=view.querySelector('.section-heading');if(heading)heading.remove();
const cards=view.querySelector('.grid');if(cards)cards.remove();
const other=[...view.children].filter(el=>el.classList.contains('card')&&!el.classList.contains('family-dashboard'));for(const el of other)el.remove();
};
document.addEventListener('click',e=>{if(e.target.closest('#clean-train')){const guided=document.getElementById('coach-open');if(guided)guided.click();else{tab='entreno';render();document.getElementById('coach-open')?.click()}}});
const btn=document.createElement('button');btn.id='quick-logout';btn.textContent='Salir';btn.title='Cerrar sesión';document.querySelector('header')?.append(btn);
btn.addEventListener('click',()=>{tab='ajustes';render();document.getElementById('family-lock')?.click()});
})();
