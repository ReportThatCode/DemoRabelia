const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_h1tozuj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

fetch("header.html")
.then(res => res.text())
.then(data =>{
console.log(data)
document.querySelector("#placeholder-header").outerHTML = data;
})

document.addEventListener("click",(e)=>{
  const hamburgerIcon = e.target.closest(".menu-hamburger");


  if(hamburgerIcon){
      document.querySelector(".comp-header").classList.toggle("header-is-active");
    }
})