
document.addEventListener('DOMContentLoaded',()=>{
 const current=(window.location.pathname.split('/').pop()||'index.html').toLowerCase();
 document.querySelectorAll('nav ul li a').forEach(a=>{
   const href=(a.getAttribute('href')||'').split('/').pop().toLowerCase();
   if(href===current){a.classList.add('active');}
 });
});
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
 if(!navbar) return;
 if(window.scrollY>50) navbar.classList.add('scrolled');
 else navbar.classList.remove('scrolled');
});
