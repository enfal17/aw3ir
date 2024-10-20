window.onload = function () {
    console.log("DOM ready!");

    // Intercepter la soumission du formulaire
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la soumission du formulaire par défaut
        console.log("Formulaire soumis!");

        // Récupérer les valeurs des champs
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const birthday = document.getElementById("birthday").value;
        const adresse = document.getElementById("adresse").value;
        const email = document.getElementById("email").value;

        // Validation des champs texte (min 5 caractères)
        if (nom.length < 5 || prenom.length < 5 || adresse.length < 5) {
            alert("Les champs texte doivent avoir au moins 5 caractères.");
            return; // Arrêter si validation échoue
        }

        // Validation de l'email
        if (!validateEmail(email)) {
            alert("Adresse email invalide.");
            return; // Arrêter si validation échoue
        }

        // Validation de la date de naissance (ne doit pas être dans le futur)
        const birthdayDate = new Date(birthday);
        const nowTimestamp = Date.now();
        if (birthdayDate.getTime() > nowTimestamp) {
            alert("La date de naissance ne doit pas être dans le futur.");
            return; // Arrêter si validation échoue
        }

        // Masquer le formulaire
        document.querySelector("form").style.display = "none";

        // Générer un message de confirmation personnalisé
        const confirmationMessage = `
            <h1>Bienvenue ${prenom} ${nom}!</h1>
            <hr />
            <p>Vous êtes né(e) le : ${birthday}</p>
            <p>Vous habitez à : ${adresse}</p>
            <div>
                <h3>Votre emplacement sur la carte :</h3>
                <a href="http://maps.google.com/maps?q=${encodeURIComponent(adresse)}" target="_blank">
                    <img src="https://maps.googleapis.com/maps/api/staticmap?markers=${encodeURIComponent(adresse)}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg" 
                    alt="Google Map de ${adresse}" class="img-fluid" />
                </a>
            </div>
        `;

        // Remplacer le contenu de la page par le message de confirmation
        document.querySelector(".container").innerHTML = confirmationMessage;
    });
};

// Fonction de validation de l'email
function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
