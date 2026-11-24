// Peças comuns ao site, à reserva e ao painel da equipe.
// Horários da bio do Instagram (23/11/2026), em minutos desde 0h.
window.HOR={0:[[690,1320]],1:[[690,900],[1050,1380]],2:[[690,900],[1050,1380]],3:[[690,900],[1050,1380]],4:[[690,1380]],5:[[690,1410]],6:[[690,1410]]};
window.DIAS=['domingo','segunda','terça','quarta','quinta','sexta','sábado'];
window.DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

window.lang=(()=>{try{return new URLSearchParams(location.search).get('lang')||localStorage.getItem('carbone-lang')||'pt'}catch(e){return 'pt'}})();
window.L=(pt,en)=>lang==='en'?en:pt;
window.setLang=l=>{lang=l;document.documentElement.lang=l==='en'?'en':'pt-BR';try{localStorage.setItem('carbone-lang',l)}catch(e){}};
window.hm=m=>{const h=Math.floor(m/60),n=m%60;return lang==='en'?`${h}:${String(n).padStart(2,'0')}`:`${h}h${n?String(n).padStart(2,'0'):''}`;};

window.agoraFortaleza=()=>{
  const p=new Intl.DateTimeFormat('en-US',{timeZone:'America/Fortaleza',weekday:'short',hour:'numeric',minute:'numeric',hour12:false}).formatToParts(new Date());
  const g=t=>p.find(x=>x.type===t).value;
  return {d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')),m:(parseInt(g('hour'))%24)*60+parseInt(g('minute'))};
};

// No protótipo as reservas ficam só neste navegador. No ar, vão para a agenda da casa.
window.Reservas={
  chave:'carbone-reservas',
  todas(){try{return JSON.parse(localStorage.getItem(this.chave)||'[]')}catch(e){return []}},
  salvar(l){try{localStorage.setItem(this.chave,JSON.stringify(l))}catch(e){}},
  nova(r){const l=this.todas();l.unshift(r);this.salvar(l);},
  muda(codigo,campos){const l=this.todas();const r=l.find(x=>x.codigo===codigo);if(r){Object.assign(r,campos);this.salvar(l);}}
};
