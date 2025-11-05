// main.js - helpers mínimos accesibilidad/UX
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll (reducido — progressive enhancement)
  if('scrollBehavior' in document.documentElement.style){
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', (e)=>{
        const target = document.querySelector(a.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
          target.setAttribute('tabindex','-1');
          target.focus({preventScroll:true});
        }
      });
    });
  }
});