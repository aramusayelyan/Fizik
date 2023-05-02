const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Ուղարկվում է...';

   const serviceID = 'default_service';
   const templateID = 'template_z638g39';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Ուղարկել';
      alert('Հաղորդագրությունը հաջողությամբ տեղ է հասել!');
    }, (err) => {
      btn.value = 'Ուղարկել';
      alert(JSON.stringify(err));
    });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}))