function route(){
  const p=(location.hash||'#current').slice(1);
  const page=document.getElementById(p)?p:'current';
  document.querySelectorAll('.page').forEach(s=>s.classList.toggle('show',s.id===page));
  document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('active',a.dataset.page===page));
  window.scrollTo(0,0);
}
addEventListener('hashchange',route);route();
