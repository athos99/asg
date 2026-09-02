function validateForm() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const typeClient = document.getElementById("type-client").value;
    const message = document.getElementById("message").value;

    if (!nom || !email || !typeClient || !message) {
        alert("Veuillez remplir tous les champs obligatoires (*).");
        return false;
    }

    const subject = encodeURIComponent("Demande de contact depuis le site ASG Arbres Services Genève");
    const body = encodeURIComponent(
        `Nom: ${nom}\nEmail: ${email}\nTéléphone: ${document.getElementById("telephone").value || "Non fourni"}\nType de client: ${typeClient}\nMessage: ${message}`
    );

    window.location.href = `mailto:bendik.hauserman@bluewin.ch?subject=${subject}&body=${body}`;
    return false;
}