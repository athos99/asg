document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
  if(menu&&nav) menu.addEventListener("click",()=>nav.classList.toggle("open"));
  document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
  const form=document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const data=new FormData(form);
      const subject=encodeURIComponent("Demande de renseignements - ASG Arbres Services Genève");
      const body=encodeURIComponent(
        `Bonjour Bendik,\n\nJe vous contacte depuis le site ASG Arbres Services Genève.\n\n`+
        `Nom : ${data.get("name")}\n`+
        `Téléphone / e-mail : ${data.get("reply")}\n`+
        `Projet : ${data.get("project")}\n\n`+
        `Message :\n${data.get("message")}\n\nCordialement,\n${data.get("name")}`
      );
      window.location.href=`mailto:bendik.hauserman@bluewin.ch?subject=${subject}&body=${body}`;
      const status=document.getElementById("formStatus");
      if(status) status.textContent="Votre logiciel de messagerie devrait maintenant s’ouvrir. Vous pourrez ajouter des photos avant l’envoi.";
    });
  }
});