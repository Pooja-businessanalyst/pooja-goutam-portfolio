// Mobile menu toggle + contact demo
document.addEventListener('DOMContentLoaded', function(){
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileToggle.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.classList.remove('hidden');
    form.reset();
    setTimeout(()=> msg.classList.add('hidden'), 3000);
  });
});
