// form-validation.js

// Fonction pour afficher le nombre de caractères dans un champ
function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
  }
  
  // Fonction pour ajouter un contact
  function addContact() {
    // Récupère les valeurs des champs
    const name = document.getElementById("name").value;
    const firstname = document.getElementById("firstname").value;
    const date = document.getElementById("birthdate").value;
    const address = document.getElementById("address").value;
    const mail = document.getElementById("email").value;
  
    // Ajoute le contact au store
    contactStore.add(name, firstname, date, address, mail);
  
    // Met à jour l'affichage du tableau des contacts
    displayContactList();
  }
  
  // Fonction pour afficher les contacts dans un tableau HTML
  function displayContactList() {
    const contactList = contactStore.getList();
    const tbody = document.querySelector("table tbody");
  
    // Vide le tableau
    tbody.innerHTML = "";
  
    // Remplit le tableau avec les contacts
    for (const contact of contactList) {
      tbody.innerHTML += `
        <tr>
          <td>${contact.name}</td>
          <td>${contact.firstname}</td>
          <td>${contact.date}</td>
          <td>${contact.address}</td>
          <td>${contact.mail}</td>
        </tr>`;
    }
  }
  
  // Fonction pour réinitialiser la liste des contacts
  function resetContacts() {
    contactStore.reset();
    displayContactList();
  }
  
  // Affiche la liste des contacts au chargement de la page
  window.onload = function () {
    displayContactList();
  };
  