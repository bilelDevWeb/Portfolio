document.getElementById('contactForm').addEventListener('submit', function (e) {

    const name = getElementById('name').value.trim();
    const email = getElementById('email').value.trim();
    const tel = getElementById('tel').value.trim();
    const comment = getElementById('comment').value.trim();

    console.log("Nom :", name);
    console.log("Email :", email);
    console.log("Téléphone :", tel);
    console.log("Commentaire :", comment);

    alert("Merci pour votre message," + name + '!');

    this.reset();
})